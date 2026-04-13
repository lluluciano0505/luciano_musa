const mapElement = document.querySelector('#experience-map');

if (mapElement) {
  const dataElement = document.querySelector('#experience-data');
  const landElement = document.querySelector('#experience-map-land');
  const regionLabelsElement = document.querySelector('#experience-map-region-labels');
  const pointsElement = document.querySelector('#experience-map-points');

  if (dataElement && landElement && regionLabelsElement && pointsElement) {
    const mapWidth = 1200;
    const mapHeight = 620;
    const maxLatitude = 80;
    const labels = JSON.parse(dataElement.textContent);
    const landShapes = [
      {
        className: 'experience-map-landmass continent-asia',
        points: [
          [72, 12], [85, 8], [98, 10], [110, 16], [122, 24], [129, 36], [132, 46], [125, 56],
          [116, 59], [101, 56], [90, 50], [82, 42], [76, 30], [72, 20],
        ],
      },
      {
        className: 'experience-map-landmass continent-europe',
        points: [
          [-10, 37], [-2, 41], [10, 44], [22, 48], [29, 56], [20, 62], [8, 60], [-3, 55], [-8, 48],
        ],
      },
      {
        className: 'experience-map-landmass continent-north-america',
        points: [
          [-130, 24], [-124, 34], [-118, 44], [-110, 52], [-96, 60], [-84, 56], [-72, 48],
          [-66, 40], [-72, 30], [-84, 24], [-102, 20], [-118, 18],
        ],
      },
    ];
    const regionLabels = [
      { name: 'East Asia', longitude: 112, latitude: 46 },
      { name: 'Europe', longitude: 10, latitude: 60 },
      { name: 'North America', longitude: -95, latitude: 55 },
    ];

    const project = (longitude, latitude) => {
      const boundedLatitude = Math.max(Math.min(latitude, maxLatitude), -maxLatitude);
      const longitudeX = ((longitude + 180) / 360) * mapWidth;
      const latitudeRadians = (boundedLatitude * Math.PI) / 180;
      const mercatorY = Math.log(Math.tan(Math.PI / 4 + latitudeRadians / 2));
      const maxMercatorY = Math.log(Math.tan(Math.PI / 4 + (maxLatitude * Math.PI) / 360));
      const latitudeY = mapHeight / 2 - (mercatorY / maxMercatorY) * (mapHeight / 2);

      return { x: longitudeX, y: latitudeY };
    };

    const createSvgNode = (name, attributes) => {
      const node = document.createElementNS('http://www.w3.org/2000/svg', name);
      Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
      return node;
    };

    const polygonToPath = (points) => points
      .map(([longitude, latitude], index) => {
        const point = project(longitude, latitude);
        return `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
      })
      .join(' ') + ' Z';

    landShapes.forEach((shape) => {
      landElement.appendChild(createSvgNode('path', {
        class: shape.className,
        d: polygonToPath(shape.points),
      }));
    });

    regionLabels.forEach((region) => {
      const point = project(region.longitude, region.latitude);
      const label = createSvgNode('text', {
        class: 'experience-map-region-label',
        x: point.x,
        y: point.y,
      });
      label.textContent = region.name;
      regionLabelsElement.appendChild(label);
    });

    labels.forEach((item) => {
      const point = project(item.longitude, item.latitude);
      const labelOffsetX = Number(item.label_dx || 16);
      const labelOffsetY = Number(item.label_dy || -14);
      const labelAnchor = labelOffsetX > 0 ? 'start' : 'end';
      const labelX = point.x + labelOffsetX;
      const labelY = point.y + labelOffsetY;

      pointsElement.appendChild(createSvgNode('circle', {
        class: 'experience-map-ring',
        cx: point.x,
        cy: point.y,
        r: 18,
      }));

      pointsElement.appendChild(createSvgNode('circle', {
        class: 'experience-map-point',
        cx: point.x,
        cy: point.y,
        r: 8,
      }));

      const label = createSvgNode('text', {
        class: 'experience-map-label',
        x: labelX,
        y: labelY,
        'text-anchor': labelAnchor,
      });

      const lineOne = createSvgNode('tspan', { x: labelX, dy: '0' });
      lineOne.textContent = item.city;
      const lineTwo = createSvgNode('tspan', { x: labelX, dy: '1.25em' });
      lineTwo.textContent = item.institution;
      label.appendChild(lineOne);
      label.appendChild(lineTwo);
      pointsElement.appendChild(label);
    });
  }
}
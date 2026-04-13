const mapElement = document.querySelector('#experience-map');

if (mapElement) {
  const dataElement = document.querySelector('#experience-data');
  const gridElement = document.querySelector('#experience-map-grid');
  const routeElement = document.querySelector('#experience-map-route');
  const pointsElement = document.querySelector('#experience-map-points');

  if (dataElement && gridElement && routeElement && pointsElement) {
    const mapWidth = 1200;
    const mapHeight = 620;
    const maxLatitude = 80;
    const labels = JSON.parse(dataElement.textContent);

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

    for (let longitude = -150; longitude <= 150; longitude += 30) {
      const start = project(longitude, -75);
      const end = project(longitude, 75);
      gridElement.appendChild(createSvgNode('line', {
        x1: start.x,
        y1: start.y,
        x2: end.x,
        y2: end.y,
      }));
    }

    for (let latitude = -60; latitude <= 60; latitude += 20) {
      const path = [];
      for (let longitude = -180; longitude <= 180; longitude += 8) {
        const point = project(longitude, latitude);
        path.push(`${longitude === -180 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`);
      }
      gridElement.appendChild(createSvgNode('path', { d: path.join(' ') }));
    }

    const routePath = labels
      .map((item, index) => {
        const point = project(item.longitude, item.latitude);
        return `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
      })
      .join(' ');

    routeElement.setAttribute('d', routePath);

    labels.forEach((item, index) => {
      const point = project(item.longitude, item.latitude);
      const labelOffsetX = point.x < mapWidth * 0.45 ? 14 : -14;
      const labelAnchor = labelOffsetX > 0 ? 'start' : 'end';
      const labelY = point.y - 12;

      pointsElement.appendChild(createSvgNode('circle', {
        class: 'experience-map-ring',
        cx: point.x,
        cy: point.y,
        r: 16,
      }));

      pointsElement.appendChild(createSvgNode('circle', {
        class: 'experience-map-point',
        cx: point.x,
        cy: point.y,
        r: 7,
      }));

      const label = createSvgNode('text', {
        class: 'experience-map-label',
        x: point.x + labelOffsetX,
        y: labelY,
        'text-anchor': labelAnchor,
      });

      const lineOne = createSvgNode('tspan', { x: point.x + labelOffsetX, dy: '0' });
      lineOne.textContent = item.city;
      const lineTwo = createSvgNode('tspan', { x: point.x + labelOffsetX, dy: '1.25em' });
      lineTwo.textContent = item.institution;
      label.appendChild(lineOne);
      label.appendChild(lineTwo);
      pointsElement.appendChild(label);

      const indexBadge = createSvgNode('text', {
        class: 'experience-map-index',
        x: point.x,
        y: point.y,
      });
      indexBadge.textContent = String(index + 1);
      pointsElement.appendChild(indexBadge);
    });
  }
}
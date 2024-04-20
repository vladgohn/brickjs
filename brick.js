class BRICK {
	constructor(basePath = 'bricks/') {
		this.basePath = basePath;
		this.cache = {};
	}

	async load(brickName) {
		if (this.cache[brickName]) {
			return this.cache[brickName];
		}

		try {
			const response = await fetch(`${this.basePath}${brickName}.html`);
			if (!response.ok) {
				throw new Error(`Network response was not ok for ${brickName}`);
			}
			const template = await response.text();
			this.cache[brickName] = template;
			return template;
		} catch (error) {
			console.error('BRICK load error:', error);
			throw error;
		}
	}

	async render(brickName, data, containerSelector) {
		try {
			const template = await this.load(brickName);
			const html = template.replace(/\$\{(\w+)\}/g, (_, key) => data[key] || '');
			if (containerSelector) {
				$(containerSelector).html(html);
			} else {
				console.error('BRICK render error: No container selector provided');
			}
		} catch (error) {
			console.error('BRICK render error:', error);
		}
	}
}

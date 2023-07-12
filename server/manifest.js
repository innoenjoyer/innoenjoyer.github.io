const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","img/icon-white.ico","img/profile_image.jpg","img/social/github.svg","img/social/mail.svg","img/social/telegram.svg","styles/style.css"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg",".svg":"image/svg+xml",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.0c564fa7.js","app":"_app/immutable/entry/app.34d2ab3d.js","imports":["_app/immutable/entry/start.0c564fa7.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.8466cd25.js","_app/immutable/entry/app.34d2ab3d.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ccd26885.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-7b99fb1f.js')),
			__memo(() => import('./chunks/1-8ff1f4bc.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/","/comic/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map

/* global Package Npm */
Package.describe({
	summary:
		'Render your app before the DDP connection even comes alive - magic?',
	version: '3.3.0',
	git: 'https://github.com/abecks/meteor-fast-render',
	name: 'wekan-staringatlights-fast-render',
})

Npm.depends({
	'cookie-parser': '1.4.4',
})

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.6.1')
	api.mainModule('lib/client/fast_render.js', 'client')
	api.mainModule('lib/server/namespace.js', 'server')
	api.use('wekan-staringatlights-inject-data@2.3.0', ['client', 'server'])
	api.use('wekan-chuangbo-cookie@1.1.0', 'client')
	api.use('wekan-meteorhacks-picker@1.0.3', 'server')
	api.use('wekan-montiapm-meteorx@2.2.0', 'server')

	api.use(
		[
			'minimongo',
			'livedata',
			'ejson',
			'underscore',
			'webapp',
			'routepolicy',
			'accounts-base@2.0.0',
			'random',
		],
		['server']
	)
	api.use(['minimongo', 'ejson', 'accounts-base@2.0.0'], ['client'])

	api.addFiles(
		[
			'lib/server/utils.js',
			'lib/server/routes.js',
			'lib/server/publish_context.js',
			'lib/server/context.js',
			'lib/server/ssr_helper.js',
		],
		'server'
	)

	api.addFiles(
		[
			'lib/client/id_tools.js',
			'lib/client/debugger.js',
			'lib/client/ddp_update.js',
			'lib/client/auth.js',
			'lib/client/ssr_helper.js',
			'lib/client/boot.js',
		],
		'client'
	)
	api.use(['ecmascript', 'server-render'], ['client', 'server'])
	// api.export('FastRender', ['client', 'server'])
	// api.export('__init_fast_render', ['client'])
})

Package.onTest(function (api) {
	api.use(['ecmascript'], ['client', 'server'])
	api.use('wekan-staringatlights-fast-render', ['client', 'server'])
	api.use('tinytest', ['client', 'server'])
	api.use('http@2.0.0', 'server')
	api.use('random', ['server', 'client'])
	api.use('mongo', ['server', 'client'])
	api.use('server-render', ['server', 'client'])

	api.addFiles(
		[
			'tests/utils.js',
			'tests/client/fast_render.js',
			'tests/client/ddp_update.js',
		],
		'client'
	)

	api.addFiles(
		['tests/server/context.js', 'tests/server/integration.js'],
		'server'
	)
})

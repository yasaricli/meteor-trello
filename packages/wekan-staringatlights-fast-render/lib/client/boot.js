import { Meteor } from 'meteor/meteor'
import { FastRender } from './fast_render'
import { InjectData } from 'meteor/wekan-staringatlights-inject-data'

Meteor.startup(function() {
	if (!FastRender._wait) {
		InjectData.getData('fast-render-data', function(payload) {
			FastRender.init(payload)
		})
	}
})

import Vue from 'vue'
import Vuex from 'vuex'

import profileJson from './assets/profile.json'
import presentationJson from './assets/presentation.json'
import projectsPersoJson from './assets/projects_perso.json'
import projectsSchoolJson from './assets/projects_school.json'
import timelineJson from './assets/timeline.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: profileJson,
    presentation: presentationJson,
    projects_perso: projectsPersoJson,
    projects_school: projectsSchoolJson,
    timeline: timelineJson,
    fullscreen: false
  },
  mutations: {
    swap_fullscreen: state => state.fullscreen = !state.fullscreen
  },
  actions: {

  }
})

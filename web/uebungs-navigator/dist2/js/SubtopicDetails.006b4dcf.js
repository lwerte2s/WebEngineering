(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SubtopicDetails"],{"04ee":function(t,e,i){"use strict";i("d185")},d185:function(t,e,i){},f3e5:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("div",{staticClass:"subtopic-details"},[i("h2",{staticClass:"h2"},[t._v(t._s(t.subtopic.name))]),i("div",{staticClass:"borders"},[i("iframe",{attrs:{src:t.subtopic.url,frameborder:"0"}})])])])},n=[],r=(i("7db0"),i("b0c0"),i("ce28")),c={props:{name:{type:String,required:!0},subtopicName:{type:String,required:!0}},computed:{topic:function(){var t=this;return r["a"].topics.find((function(e){return e.name===t.name}))},subtopic:function(){var t=this;return this.topic.subtopics.find((function(e){return e.name===t.subtopicName}))}}},u=c,o=(i("04ee"),i("2877")),a=Object(o["a"])(u,s,n,!1,null,"142b89e5",null);e["default"]=a.exports}}]);
//# sourceMappingURL=SubtopicDetails.006b4dcf.js.map
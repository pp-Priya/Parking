(this["webpackJsonpreact-firestore-crud"]=this["webpackJsonpreact-firestore-crud"]||[]).push([[0],{36:function(e,t,a){e.exports=a(73)},42:function(e,t,a){},43:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(34),r=a.n(l),o=a(9),s=a(3),i=(a(41),a(42),a(11)),u=a(12),m=a(14),d=a(13),h=(a(43),a(22));a(53);h.initializeApp({apiKey:"AIzaSyB8HIiVThoMEb__-CLxN--4OnTH57CLPYQ",authDomain:"car-parking-4ebe1.firebaseapp.com",projectId:"car-parking-4ebe1",storageBucket:"car-parking-4ebe1.appspot.com",messagingSenderId:"192132727465",appId:"1:192132727465:web:86aeee41ba2cfd6d701fb8",measurementId:"G-PK9YMW3VML"}),h.firestore().settings({timestampsInSnapshots:!0});var f=h,p=a(15),b=a.n(p),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({searchQuery:e.target.value})},n.handleSearch=function(){n.ref.get().then((function(e){var t=[];e.forEach((function(e){var a=e.data();(a.name.toLowerCase().includes(n.state.searchQuery.toLowerCase())||a.flat.toLowerCase().includes(n.state.searchQuery.toLowerCase())||a.vehicle.toLowerCase().includes(n.state.searchQuery.toLowerCase())||a.contact.includes(n.state.searchQuery))&&t.push(a)})),n.setState({boards:t})})).catch((function(e){console.log("Error getting documents: ",e)}))},n.onCollectionUpdate=function(e){var t=[];e.forEach((function(e){var a=e.data(),n=a.name,c=a.flat,l=a.vehicle,r=a.contact;t.push({key:e.id,doc:e,name:n,flat:c,vehicle:l,contact:r})})),n.setState({boards:t})},n.ref=f.firestore().collection("boards"),n.unsubscribe=null,n.state={searchQuery:"",boards:[]},n}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.handleSearch()}},{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"delete",value:function(e){var t=this;b.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&t.ref.doc(e).delete().then((function(){b.a.fire({title:"Deleted",text:"Data was deleted sucessfully",icon:"success"})})).catch((function(e){}))}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"panel panel-default"},c.a.createElement("div",{class:"panel-heading"},c.a.createElement("h3",{class:"panel-title"},"Celebration Homes Parking")),c.a.createElement("div",{class:"panel-body"},c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement(o.b,{to:"/create",class:"btn btn-primary"},"Add")," \xa0",c.a.createElement("input",{type:"text",value:this.searchQuery,onChange:this.handleChange,placeholder:"Search"}),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement("table",{class:"table table-stripe"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Flat no."),c.a.createElement("th",null,"Vehicle no."),c.a.createElement("th",null,"Contact no."),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",null,this.state.boards.map((function(t){return c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(o.b,{to:"/show/".concat(t.key)},t.name)),c.a.createElement("td",null,t.flat),c.a.createElement("td",null,t.vehicle),c.a.createElement("td",null,t.contact),c.a.createElement("td",null,c.a.createElement(o.b,{to:"/edit/".concat(t.key),class:"btn btn-success"},"Edit"),"\xa0",c.a.createElement("button",{onClick:e.delete.bind(e,t.key),class:"btn btn-danger"},"Delete")))})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState({board:t})},n.onSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,c=t.flat,l=t.vehicle,r=t.contact;f.firestore().collection("boards").doc(n.state.key).set({name:a,flat:c,vehicle:l,contact:r}).then((function(e){n.setState({key:"",name:"",flat:"",vehicle:"",contact:""}),n.props.history.push("/"),b.a.fire({icon:"sucess",title:"Updated",text:"Data was Updated sucessfully!"})})).catch((function(e){console.error("Error adding document: ",e)}))},n.state={key:"",name:"",flat:"",vehicle:"",contact:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.firestore().collection("boards").doc(this.props.match.params.id).get().then((function(t){if(t.exists){var a=t.data();e.setState({key:t.id,name:a.name,flat:a.flat,vehicle:a.vehicle,contact:a.contact})}else console.log("No such document!")}))}},{key:"render",value:function(){return c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"panel panel-default"},c.a.createElement("div",{class:"panel-heading"},c.a.createElement("h3",{class:"panel-title"},"EDIT")),c.a.createElement("div",{class:"panel-body"},c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"name"},"Name:"),c.a.createElement("input",{type:"text",class:"form-control",name:"name",value:this.state.name,onChange:this.onChange,placeholder:"Name"})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"flat"},"Flat:"),c.a.createElement("input",{type:"text",class:"form-control",name:"flat",value:this.state.flat,onChange:this.onChange,placeholder:"Flat"})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"vehicle"},"Vehicle Number:"),c.a.createElement("input",{type:"text",class:"form-control",name:"vehicle",value:this.state.vehicle,onChange:this.onChange,placeholder:"vehicle"})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"contact"},"Contact Number:"),c.a.createElement("input",{type:"number",class:"form-control",name:"contact",value:this.state.contact,onChange:this.onChange,placeholder:"Contact"})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit",class:"btn btn-success"},"Submit"),"\xa0",c.a.createElement("button",{type:"button",class:"btn btn-secondry"},c.a.createElement(o.b,{to:"/"},"Back")))))))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,c=a.flat,l=a.vehicle,r=a.contact;n&&l?e.ref.add({name:n,flat:c,vehicle:l,contact:r}).then((function(t){e.setState({name:"",flat:"",vehicle:"",contact:""}),e.props.history.push("/"),b.a.fire({icon:"sucess",title:"Added",text:"Data was added sucessfully!"})})).catch((function(e){console.error("Error adding document: ",e)})):b.a.fire({icon:"warning",title:"Add",text:"Name and vehicle number are required!!"})},e.ref=f.firestore().collection("boards"),e.state={name:"",flat:"",vehicle:"",contact:""},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.flat,n=e.vehicle,l=e.contact;return c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"panel panel-default"},c.a.createElement("div",{class:"panel-heading"},c.a.createElement("h3",{class:"panel-title"},"ADD")),c.a.createElement("div",{class:"panel-body"},c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"name"},"Name:"),c.a.createElement("input",{type:"text",class:"form-control",name:"name",value:t,onChange:this.onChange,placeholder:"Name"})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"flat"},"Flat Number:"),c.a.createElement("input",{type:"text",class:"form-control",name:"flat",value:a,onChange:this.onChange,placeholder:"Flat"})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"vehicle"},"Vehicle Number:"),c.a.createElement("input",{type:"text",class:"form-control",name:"vehicle",value:n,onChange:this.onChange,placeholder:"vehicle"})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"contact"},"Contact Number:"),c.a.createElement("input",{type:"number",class:"form-control",name:"contact",value:l,onChange:this.onChange,placeholder:"Contact"})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit",class:"btn btn-success"},"Submit"),"\xa0",c.a.createElement("button",{type:"button",class:"btn btn-secondry"},c.a.createElement(o.b,{to:"/"},"Back")))))))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={board:{},key:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.firestore().collection("boards").doc(this.props.match.params.id).get().then((function(t){t.exists?e.setState({board:t.data(),key:t.id,isLoading:!1}):console.log("No such document!")}))}},{key:"render",value:function(){return c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"panel panel-default"},c.a.createElement("div",{class:"panel-heading"},c.a.createElement("h3",{class:"panel-title"},this.state.board.name)),c.a.createElement("div",{class:"panel-body"},c.a.createElement("dl",null,c.a.createElement("dt",null,"Flat:"),c.a.createElement("dd",null,this.state.board.flat),c.a.createElement("dt",null,"vehicle:"),c.a.createElement("dd",null,this.state.board.vehicle),c.a.createElement("dt",null,"Contact:"),c.a.createElement("dd",null,this.state.board.contact))),c.a.createElement("h4",null,c.a.createElement(o.b,{to:"/"},"Go to Home"))))}}]),a}(n.Component);r.a.render(c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(s.a,{exact:!0,path:"/",component:v}),c.a.createElement(s.a,{path:"/edit/:id",component:E}),c.a.createElement(s.a,{path:"/create",component:g}),c.a.createElement(s.a,{path:"/show/:id",component:y}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.b79da474.chunk.js.map
(this["webpackJsonpreact-firestore-crud"]=this["webpackJsonpreact-firestore-crud"]||[]).push([[0],{44:function(e,t,a){e.exports=a(82)},50:function(e,t,a){},52:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(39),o=a.n(c),r=a(10),i=a(4),s=(a(49),a(50),a(25)),u=a.n(s),m=a(40),d=a(12),h=a(13),f=a(16),b=a(15),p=(a(52),a(26));a(62);p.initializeApp({apiKey:"AIzaSyDw9BLHoGbv65y_GMQmO-eY7n6XC-uZoiA",authDomain:"abcd1-71648.firebaseapp.com",projectId:"abcd1-71648",storageBucket:"abcd1-71648.appspot.com",messagingSenderId:"705791201328",appId:"1:705791201328:web:c6785588344f8fcc295df5",measurementId:"G-PQ65Q67VRW"}),p.firestore().settings({timestampsInSnapshots:!0});var E=p,v=a(17),g=a.n(v),C=a(41),y=a.n(C),k=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({searchQuery:e.target.value})},n.handleSearch=function(){n.ref.get().then((function(e){var t=[];e.forEach((function(e){var a=e.data();(a.name.toLowerCase().includes(n.state.searchQuery.toLowerCase())||a.flat.toLowerCase().includes(n.state.searchQuery.toLowerCase())||a.vehicle.toLowerCase().includes(n.state.searchQuery.toLowerCase())||a.contact.includes(n.state.searchQuery)||a.altcontact.includes(n.state.searchQuery))&&t.push(a)})),n.setState({parking:t})})).catch((function(e){console.log("Error getting documents: ",e)}))},n.onCollectionUpdate=function(e){var t=[];e.forEach((function(e){var a=e.data(),n=a.name,l=a.building,c=a.flat,o=a.vehicle,r=a.contact,i=a.altcontact;t.push({key:e.id,doc:e,name:n,building:l,flat:c,vehicle:o,contact:r,altcontact:i})})),n.setState({parking:t})},n.handleExport=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ref.get().then((function(e){var t=new y.a.Workbook,a=t.addWorksheet("Data");a.addRow(["Name","Vehicle no","Flat no","Contact no","Alternet Contact no"]),e.forEach((function(e,t){var n=e.data(),l=[n.name,n.vehicle,n.building+"-"+n.flat,n.contact,n.altcontact];a.addRow(l)})),t.xlsx.writeBuffer().then((function(e){n.downloadFile("data.xlsx",e)}))})).catch((function(e){console.error("Error getting documents: ",e)}));case 2:case"end":return e.stop()}}),e)}))),n.downloadFile=function(e,t){var a=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),n=window.URL.createObjectURL(a),l=document.createElement("a");l.href=n,l.setAttribute("download",e),document.body.appendChild(l),l.click(),document.body.removeChild(l)},n.handleCall=function(e){var t="tel:".concat(e);window.open(t)},n.ref=E.firestore().collection("parking"),n.unsubscribe=null,n.state={searchQuery:"",parking:[]},n}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.handleSearch()}},{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"delete",value:function(e){var t=this;g.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&t.ref.doc(e).delete().then((function(){g.a.fire({title:"Deleted",text:"Data was deleted sucessfully",icon:"success"})})).catch((function(e){}))}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("br",null),l.a.createElement("h2",{class:"panel-title"},"Celebration Homes Parking")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("br",null),l.a.createElement("div",{class:"form-group col-md-4"},l.a.createElement(r.b,{to:"/create",class:"btn btn-primary"},"Add")," \xa0\xa0\xa0\xa0",l.a.createElement("button",{class:"btn btn-info",onClick:this.handleExport},"Export as Excel Sheet")),l.a.createElement("div",{class:"form-group col-md-4"},l.a.createElement("input",{class:"form-control",type:"text",value:this.searchQuery,onChange:this.handleChange,placeholder:"Search"})),l.a.createElement("table",{class:"table table-stripe"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Vehicle no."),l.a.createElement("th",null,"Flat no."),l.a.createElement("th",null,"Contact no."),l.a.createElement("th",null,"Alt Contact no."),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,this.state.parking.map((function(t){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(r.b,{to:"/show/".concat(t.key)},t.name)),l.a.createElement("td",null,t.vehicle),l.a.createElement("td",null,t.building," - ",t.flat),l.a.createElement("td",null,l.a.createElement("a",{href:"tel:".concat(t.contact),onClick:function(){return e.handleCall(t.contact)}},t.contact)),l.a.createElement("td",null,l.a.createElement("a",{href:"tel:".concat(t.altcontact),onClick:function(){return e.handleCall(t.altcontact)}},t.altcontact)),l.a.createElement("td",null,l.a.createElement(r.b,{to:"/edit/".concat(t.key),class:"btn btn-success"},"Edit"),"\xa0\xa0\xa0\xa0",l.a.createElement("button",{onClick:e.delete.bind(e,t.key),class:"btn btn-danger"},"Delete")))})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(38);var w=a(22),S=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handlePhoneNumberChange=function(e){void 0!==e?n.setState({contact:e}):n.setState({contact:""})},n.handleAltPhoneNumberChange=function(e){void 0!==e?n.setState({altcontact:e}):n.setState({altcontact:""})},n.onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState({board:t})},n.onSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,l=t.building,c=t.flat,o=t.vehicle,r=t.contact,i=t.altcontact;E.firestore().collection("parking").doc(n.state.key).set({name:a,building:l,flat:c,vehicle:o,contact:r,altcontact:i}).then((function(e){n.setState({key:"",name:"",building:"",flat:"",vehicle:"",contact:"",altcontact:""}),n.props.history.push("/"),g.a.fire({icon:"sucess",title:"Updated",text:"Data was Updated sucessfully!"})})).catch((function(e){console.error("Error adding document: ",e)}))},n.state={key:"",name:"",building:"",flat:"",vehicle:"",contact:"",altcontact:""},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.firestore().collection("parking").doc(this.props.match.params.id).get().then((function(t){if(t.exists){var a=t.data();e.setState({key:t.id,name:a.name,building:a.building,flat:a.flat,vehicle:a.vehicle,contact:a.contact,altcontact:a.altcontact})}else console.log("No such document!")}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-title"},"EDIT")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"name"},"Name:"),l.a.createElement("input",{type:"text",class:"form-control",name:"name",value:this.state.name,onChange:this.onChange,placeholder:"Name",required:!0})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"vehicle"},"Vehicle Number:"),l.a.createElement("input",{type:"text",class:"form-control",name:"vehicle",value:this.state.vehicle,onChange:this.onChange,placeholder:"vehicle",required:!0})),l.a.createElement("div",{class:"form-group doublecol"},l.a.createElement("label",{for:"building"},"Select building"),l.a.createElement("select",{class:"form-control",name:"building",id:"building",value:this.state.building,onChange:this.onChange,required:!0},l.a.createElement("option",{value:""},"Select"),l.a.createElement("option",{value:"A"},"A"),l.a.createElement("option",{value:"B"},"B"),l.a.createElement("option",{value:"C"},"C"),l.a.createElement("option",{value:"D"},"D"),l.a.createElement("option",{value:"E"},"E"),l.a.createElement("option",{value:"F"},"F"),l.a.createElement("option",{value:"G"},"G"),l.a.createElement("option",{value:"H"},"H")),l.a.createElement("label",{for:"flat"},"Flat:"),l.a.createElement("input",{type:"number",class:"form-control",name:"flat",value:this.state.flat,onChange:this.onChange,placeholder:"Flat",required:!0})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"contact"},"Contact Number:"),l.a.createElement(w.a,{placeholder:"Contact",className:"form-control",defaultCountry:"IN",limitMaxLeng:"10",value:this.state.contact,onChange:this.handlePhoneNumberChange,rules:{required:!0}})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"Altcontact"},"Alternative Contact Number:"),l.a.createElement(w.a,{placeholder:"Contact",className:"form-control",defaultCountry:"IN",limitMaxLeng:"10",value:this.state.altcontact,onChange:this.handleAltPhoneNumberChange})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",class:"btn btn-success"},"Submit"),"\xa0",l.a.createElement("button",{type:"button",class:"btn btn-secondry"},l.a.createElement(r.b,{to:"/"},"Back")))))))}}]),a}(n.Component),N=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.handlePhoneNumberChange=function(t){void 0!==t?e.setState({contact:t}):e.setState({contact:""})},e.handleAltPhoneNumberChange=function(t){void 0!==t?e.setState({altcontact:t}):e.setState({altcontact:""})},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,l=a.flat,c=a.vehicle,o=a.contact,r=a.altcontact,i=a.building;n&&c&&o?e.ref.add({name:n,building:i,flat:l,vehicle:c,contact:o,altcontact:r}).then((function(t){e.setState({name:"",building:"",flat:"",vehicle:"",contact:"",altcontact:""}),e.props.history.push("/"),g.a.fire({icon:"sucess",title:"Added",text:"Data was added sucessfully!"})})).catch((function(e){console.error("Error adding document: ",e)})):g.a.fire({icon:"warning",title:"Add",text:"Please fill required fieds!!"})},e.ref=E.firestore().collection("parking"),e.state={name:"",building:"",flat:"",vehicle:"",contact:"",altcontact:""},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.building,n=e.flat,c=e.vehicle,o=e.contact,i=e.altcontact;return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-title"},"ADD")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"name"},"Name:"),l.a.createElement("input",{type:"text",class:"form-control",name:"name",value:t,onChange:this.onChange,placeholder:"Name",required:!0})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"vehicle"},"Vehicle Number:"),l.a.createElement("input",{type:"text",class:"form-control",name:"vehicle",value:c,onChange:this.onChange,placeholder:"Vehicle",required:!0})),l.a.createElement("div",{class:"form-group doublecol"},l.a.createElement("label",{for:"building"},"Select building"),l.a.createElement("select",{class:"form-control",name:"building",id:"building",value:a,onChange:this.onChange,required:!0},l.a.createElement("option",{value:""},"Select"),l.a.createElement("option",{value:"A"},"A"),l.a.createElement("option",{value:"B"},"B"),l.a.createElement("option",{value:"C"},"C"),l.a.createElement("option",{value:"D"},"D"),l.a.createElement("option",{value:"E"},"E"),l.a.createElement("option",{value:"F"},"F"),l.a.createElement("option",{value:"G"},"G"),l.a.createElement("option",{value:"H"},"H")),l.a.createElement("label",{for:"flat"},"Flat Number:"),l.a.createElement("input",{type:"number",class:"form-control",name:"flat",value:n,onChange:this.onChange,placeholder:"Flat",required:!0})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"contact"},"Contact Number:"),l.a.createElement(w.a,{placeholder:"Contact",className:"form-control",defaultCountry:"IN",length:"10",value:o,onChange:this.handlePhoneNumberChange,rules:{required:!0}})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"Altcontact"},"Alternative Contact Number:"),l.a.createElement(w.a,{placeholder:"Contact",className:"form-control",defaultCountry:"IN",length:"10",value:i,onChange:this.handleAltPhoneNumberChange})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",class:"btn btn-success"},"Submit"),"\xa0",l.a.createElement("button",{type:"button",class:"btn btn-secondry"},l.a.createElement(r.b,{to:"/"},"Back")))))))}}]),a}(n.Component),x=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleCall=function(e){var t="tel:".concat(e);window.open(t)},n.state={board:{},key:""},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.firestore().collection("parking").doc(this.props.match.params.id).get().then((function(t){t.exists?e.setState({board:t.data(),key:t.id,isLoading:!1}):console.log("No such document!")}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("br",null),l.a.createElement("h3",{class:"panel-title doublecol"},this.state.board.name," ",l.a.createElement("h4",null,l.a.createElement(r.b,{to:"/"},"Go to Home"))),l.a.createElement("br",null)),l.a.createElement("div",{class:"panel-body"},l.a.createElement("dl",null,l.a.createElement("dt",null,"Flat number:"),l.a.createElement("dd",null,this.state.board.building," - ",this.state.board.flat),l.a.createElement("dt",null,"vehicle number:"),l.a.createElement("dd",null,this.state.board.vehicle),l.a.createElement("dt",null,"Contact number:"),l.a.createElement("dd",null,l.a.createElement("a",{href:"tel:".concat(this.state.board.contact),onClick:function(){return e.handleCall(e.state.board.contact)}},this.state.board.contact)),l.a.createElement("dt",null,"Alternative Contact number:"),l.a.createElement("dd",null,l.a.createElement("a",{href:"tel:".concat(this.state.board.altcontact),onClick:function(){return e.handleCall(e.state.board.altcontact)}},this.state.board.altcontact))))))}}]),a}(n.Component);o.a.render(l.a.createElement(r.a,null,l.a.createElement("div",null,l.a.createElement(i.a,{exact:!0,path:"/",component:k}),l.a.createElement(i.a,{path:"/edit/:id",component:S}),l.a.createElement(i.a,{path:"/create",component:N}),l.a.createElement(i.a,{path:"/show/:id",component:x}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.9e03c704.chunk.js.map
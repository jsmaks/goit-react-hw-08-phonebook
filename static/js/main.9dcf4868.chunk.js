(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{33:function(t,e,n){},59:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(9),o=n.n(r),u=(n(33),n(11)),i=n(12),s=n(15),b=n(14),l=n(3),j=n(6),d=n(18),f=n.n(d),O=n(28),h=n(8),p=n.n(h),m=n(2),C=Object(m.b)("contacts/fetchContactsRequest"),v=Object(m.b)("contacts/fetchContactsSuccess"),g=Object(m.b)("contacts/fetchContactsError"),x=Object(m.b)("contacts/addContactRequest"),y=Object(m.b)("contacts/addContactSuccess"),k=Object(m.b)("contacts/addContactError"),w=Object(m.b)("contacts/deleteContactRequest"),L=Object(m.b)("contacts/deleteContactSuccess"),A=Object(m.b)("contacts/deleteContactError"),N=Object(m.b)("contacts/changeFilter");p.a.defaults.baseURL="http://localhost:4040";var S,_,D=function(t){return function(e){e(x()),p.a.post("/contacts",t).then((function(t){var n=t.data;return e(y(n))})).catch((function(t){return e(k(t))}))}},q=function(t){return function(e){e(w()),p.a.delete("/contacts/".concat(t)).then((function(){return e(L(t))})).catch((function(t){return e(A(t))}))}},z=function(){return function(){var t=Object(O.a)(f.a.mark((function t(e){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(C()),t.prev=1,t.next=4,p.a.get("/contacts");case 4:n=t.sent,c=n.data,e(v(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(g(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},F=n(10),E=function(t){return t.contacts.filter},R=function(t){return t.contacts.items},J={getLoading:function(t){return t.contacts.loading},getFilter:E,getVisibleContacts:Object(F.a)([R,E],(function(t,e){var n=e.toLocaleLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),getAllContacts:R},M=(n(59),n(1)),T=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(l.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.checkOnDuplicate(t.props.libraryContacts),t.reset()},t.checkOnDuplicate=function(e){var n=t.state.name.toLowerCase();e.find((function(t){return t.name.toLowerCase()===n}))?alert("".concat(t.state.name," is alredy in contacts")):t.props.addContact(t.state)},t.reset=function(){t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(M.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(M.jsxs)("label",{children:["Name",Object(M.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange})]}),Object(M.jsxs)("label",{children:["Number",Object(M.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange})]}),Object(M.jsx)("button",{className:"btn",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}}]),n}(c.Component),Z=Object(j.b)((function(t){return{libraryContacts:J.getAllContacts(t)}}),(function(t){return{addContact:function(e){return t(D(e))}}}))(T),B=(n(61),Object(j.b)((function(t){return{libraryContacts:J.getVisibleContacts(t)}}),(function(t){return{onDelete:function(e){return t(q(e))}}}))((function(t){var e=t.libraryContacts,n=t.onDelete;return Object(M.jsx)("div",{children:Object(M.jsx)("ul",{className:"contacts__list",children:e.map((function(t){return Object(M.jsxs)("li",{className:"contacts__item",children:[Object(M.jsxs)("p",{className:"contact__name",children:[t.name,":",Object(M.jsx)("span",{className:"contact__tel",children:t.number})]}),Object(M.jsx)("button",{className:"btn btn-delete",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})}))),V=Object(j.b)((function(t){return{value:J.getFilter(t)}}),(function(t){return{onChange:function(e){return t(N(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(M.jsxs)("label",{children:["Find contacts by name",Object(M.jsx)("input",{type:"text",value:e,onChange:n})]})})),I=function(t){var e=t.children;return Object(M.jsx)("div",{className:"container",children:e})},P=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(M.jsxs)(I,{children:[Object(M.jsx)("h1",{children:"Phonebook"}),Object(M.jsx)(Z,{}),Object(M.jsx)("h2",{children:"Contacts"}),Object(M.jsx)(V,{}),this.props.isLoadingContacts&&Object(M.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),Object(M.jsx)(B,{})]})}}]),n}(c.Component),U=Object(j.b)((function(t){return{isLoadingContacts:J.getLoading(t)}}),(function(t){return{fetchContacts:function(){return t(z())}}}))(P),$=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(U,{}),";"]})},G=n(13),H=n(7),K=n(4),Q=Object(m.c)([],(S={},Object(l.a)(S,v,(function(t,e){return e.payload})),Object(l.a)(S,y,(function(t,e){var n=e.payload;return[].concat(Object(G.a)(t),[n])})),Object(l.a)(S,L,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),S)),W=Object(m.c)("",Object(l.a)({},N,(function(t,e){return e.payload}))),X=Object(m.c)(!1,(_={},Object(l.a)(_,C,(function(){return!0})),Object(l.a)(_,v,(function(){return!1})),Object(l.a)(_,g,(function(){return!1})),Object(l.a)(_,x,(function(){return!0})),Object(l.a)(_,y,(function(){return!1})),Object(l.a)(_,k,(function(){return!1})),Object(l.a)(_,w,(function(){return!0})),Object(l.a)(_,L,(function(){return!1})),Object(l.a)(_,A,(function(){return!1})),_)),Y=Object(m.c)(null,{}),tt=Object(K.b)({items:Q,filter:W,loading:X,error:Y}),et=Object(G.a)(Object(m.d)({serializableCheck:{ignoredActions:[H.a,H.f,H.b,H.c,H.d,H.e]}})),nt=Object(m.a)({reducer:{contacts:tt},middleware:et,devToold:!1});o.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(j.a,{store:nt,children:Object(M.jsx)($,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.9dcf4868.chunk.js.map
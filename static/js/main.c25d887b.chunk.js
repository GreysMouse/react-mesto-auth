(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(20),i=n.n(o),s=n(8),r=(n(27),n(22)),u=n(2),l=n(3),p=n(0);var d=function(e){return Object(p.jsx)(l.b,{children:e.isLoggedIn?e.children:Object(p.jsx)(l.a,{to:"/sign-in"})})};var h=function(e){return Object(p.jsxs)("div",{className:"auth__container",children:[Object(p.jsx)("h2",{className:"auth__header",children:e.header}),Object(p.jsxs)("form",{className:"auth__form",onSubmit:e.onSubmit,noValidate:!0,children:[e.children,Object(p.jsx)("button",{className:"auth__button".concat(e.isButtonHidden?" auth__button_disabled":""),type:"submit",disabled:e.isButtonHidden,children:e.buttonText})]}),Object(p.jsx)(s.b,{className:"auth__redirect-link",to:e.redirectLink,children:e.redirectLinkText})]})};var _=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),a=n[0],o=n[1],i=c.a.useState(""),s=Object(u.a)(i,2),r=s[0],l=s[1],d=c.a.useState(!1),_=Object(u.a)(d,2),j=_[0],b=_[1],f=c.a.useState(!1),m=Object(u.a)(f,2),O=m[0],v=m[1],g=c.a.useState(""),x=Object(u.a)(g,2),k=x[0],C=x[1],N=c.a.useState(""),y=Object(u.a)(N,2),S=y[0],A=y[1],L=c.a.useState(!0),U=Object(u.a)(L,2),T=U[0],R=U[1];return c.a.useEffect((function(){R(!j||!O)}),[j,O]),Object(p.jsx)("main",{className:"auth",children:Object(p.jsxs)(h,{header:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",isButtonHidden:T,redirectLink:"/sign-in",redirectLinkText:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438",onSubmit:function(t){t.preventDefault(),o(""),l(""),b(!1),v(!1),e.onRegister({email:a,password:r})},children:[Object(p.jsx)("input",{className:"auth__input auth__input_content_email",type:"email",value:a||"",onChange:function(e){o(e.target.value),e.target.validity.valid?(b(!0),C("")):(b(!1),C(e.target.validationMessage))},placeholder:"Email",autoComplete:"off",required:!0}),Object(p.jsx)("span",{className:"auth__input-error".concat(j?"":" auth__input-error_visible"),children:k}),Object(p.jsx)("input",{className:"auth__input auth__input_content_password",type:"password",value:r||"",onChange:function(e){l(e.target.value),e.target.validity.valid?(v(!0),A("")):(v(!1),A(e.target.validationMessage))},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"6",autoComplete:"off",required:!0}),Object(p.jsx)("span",{className:"auth__input-error".concat(O?"":" auth__input-error_visible"),children:S})]})})};var j=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),a=n[0],o=n[1],i=c.a.useState(""),s=Object(u.a)(i,2),r=s[0],l=s[1],d=c.a.useState(!1),_=Object(u.a)(d,2),j=_[0],b=_[1],f=c.a.useState(!1),m=Object(u.a)(f,2),O=m[0],v=m[1];return Object(p.jsx)("main",{className:"auth",children:Object(p.jsxs)(h,{header:"\u0412\u0445\u043e\u0434",buttonText:"\u0412\u043e\u0439\u0442\u0438",redirectLink:"",redirectLinkText:"",onSubmit:function(t){return t.preventDefault(),""===a?b(!0):(b(!1),""===r?v(!0):(v(!1),void e.handleLogin({email:a,password:r})))},children:[Object(p.jsx)("input",{className:"auth__input auth__input_content_email",type:"email",value:a||"",onChange:function(e){o(e.target.value)},placeholder:"Email",autoComplete:"off",required:!0}),Object(p.jsx)("span",{className:"auth__input-error".concat(j?" auth__input-error_visible":""),children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"}),Object(p.jsx)("input",{className:"auth__input auth__input_content_password",type:"password",value:r||"",onChange:function(e){l(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"off",required:!0}),Object(p.jsx)("span",{className:"auth__input-error".concat(O?" auth__input-error_visible":""),children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"})]})})};var b=function(e){return Object(p.jsxs)("div",{className:"menu",children:[Object(p.jsx)("p",{className:"menu__info",children:e.userInfo?e.userInfo.email:""}),Object(p.jsx)(s.b,{className:"menu__link".concat(e.userInfo?" menu__link_color_grey":""),to:e.redirectLink,onClick:e.onRedirect,children:e.redirectText})]})};var f=function(e){return Object(p.jsxs)("header",{className:"header page__header",children:[Object(p.jsx)(s.b,{className:"header__logo",to:"/"}),Object(p.jsx)(b,{redirectLink:e.redirectLink,redirectText:e.redirectText,onRedirect:e.onRedirect,userInfo:e.userInfo})]})},m=c.a.createContext();var O=function(e){var t=c.a.useContext(m),n=e.card.likes.some((function(e){return e._id===t._id}));return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"card__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(p.jsxs)("div",{className:"card__content",children:[Object(p.jsx)("h2",{className:"card__title",children:e.card.name}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:"card__like-button".concat(n?" card__like-button_checked":""),type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",onClick:function(){e.onCardLike(e.card)}}),Object(p.jsx)("p",{className:"card__like-counter",children:e.card.likes.length})]})]}),Object(p.jsx)("button",{className:"card__delete-button".concat(t._id===e.card.owner._id?"":" card__delete-button_hidden"),type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){e.onCardDelete(e.card)}})]})};var v=function(e){var t=c.a.useContext(m);return Object(p.jsxs)("main",{className:"content page__content",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("div",{className:"profile__overlay",onClick:e.onEditAvatar,children:Object(p.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsx)("h1",{className:"profile__name",children:t.name}),Object(p.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onEditProfile}),Object(p.jsx)("p",{className:"profile__description",children:t.about})]}),Object(p.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:e.onAddPlace})]}),Object(p.jsx)("section",{className:"cards","aria-label":"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043c\u0435\u0441\u0442",children:Object(p.jsxs)("ul",{className:"cards__container",children:[e.cards.map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)(O,{card:t,onCardClick:e.onOpenCard,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})},t._id)})),";"]})})]})};var g=function(){return Object(p.jsx)("footer",{className:"footer page__footer",children:Object(p.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var x=function(e){return Object(p.jsx)("div",{className:"popup popup_mode_image".concat(e.isOpen?" popup_opened":""),hidden:!0,children:Object(p.jsxs)("div",{className:"popup__place-container",children:[Object(p.jsxs)("figure",{className:"popup__place",children:[Object(p.jsx)("img",{className:"popup__place-image",src:e.card.link,alt:e.card.caption}),Object(p.jsx)("figcaption",{className:"popup__place-caption",children:e.card.caption})]}),Object(p.jsx)("button",{className:"popup__close-button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})]})})};var k=function(e){return Object(p.jsx)("div",{className:"popup".concat(e.isOpen?" popup_opened":""),hidden:!0,children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("h2",{className:"popup__header",children:e.header}),Object(p.jsxs)("form",{className:"popup__form",onSubmit:e.onSubmit,noValidate:!0,children:[e.children,Object(p.jsx)("button",{className:"popup__button".concat(e.isButtonHidden?" popup__button_disabled":""),type:"submit",disabled:e.isButtonHidden,children:e.buttonText})]}),Object(p.jsx)("button",{className:"popup__close-button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})]})})};var C=function(e){var t=c.a.useContext(m),n=c.a.useState(""),a=Object(u.a)(n,2),o=a[0],i=a[1],s=c.a.useState(""),r=Object(u.a)(s,2),l=r[0],d=r[1],h=c.a.useState(!0),_=Object(u.a)(h,2),j=_[0],b=_[1],f=c.a.useState(!0),O=Object(u.a)(f,2),v=O[0],g=O[1],x=c.a.useState(""),C=Object(u.a)(x,2),N=C[0],y=C[1],S=c.a.useState(""),A=Object(u.a)(S,2),L=A[0],U=A[1],T=c.a.useState(!1),R=Object(u.a)(T,2),E=R[0],w=R[1];return c.a.useEffect((function(){i(t.name),d(t.about),b(!0),g(!0),y(""),U("")}),[e.isOpen,t]),c.a.useEffect((function(){w(!j||!v)}),[j,v]),Object(p.jsxs)(k,{header:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isButtonHidden:E,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,description:l})},children:[Object(p.jsx)("input",{className:"popup__input popup__input_content_name",type:"text",value:o||"",onChange:function(e){i(e.target.value),e.target.validity.valid?(b(!0),y("")):(b(!1),y(e.target.validationMessage))},placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",autoComplete:"off",required:!0}),Object(p.jsx)("span",{className:"popup__input-error".concat(j?"":" popup__input-error_visible"),children:N}),Object(p.jsx)("input",{className:"popup__input popup__input_content_description",type:"text",value:l||"",onChange:function(e){d(e.target.value),e.target.validity.valid?(g(!0),U("")):(g(!1),U(e.target.validationMessage))},placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",autoComplete:"off",required:!0}),Object(p.jsx)("span",{className:"popup__input-error".concat(v?"":" popup__input-error_visible"),children:L})]})};var N=function(e){var t=c.a.useRef(),n=c.a.useState(!1),a=Object(u.a)(n,2),o=a[0],i=a[1],s=c.a.useState(""),r=Object(u.a)(s,2),l=r[0],d=r[1],h=c.a.useState(!0),_=Object(u.a)(h,2),j=_[0],b=_[1];return c.a.useEffect((function(){t.current.value="",i(!0),d(""),b(!0)}),[e.isOpen]),Object(p.jsxs)(k,{header:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isButtonHidden:j,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatarLink:t.current.value})},children:[Object(p.jsx)("input",{className:"popup__input popup__input_content_avatar",type:"url",ref:t,onChange:function(e){e.target.validity.valid?(i(!0),d(""),b(!1)):(i(!1),d(t.current.validationMessage),b(!0))},placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",autoComplete:"off",required:!0}),Object(p.jsx)("span",{className:"popup__input-error".concat(o?"":" popup__input-error_visible"),children:l})]})};var y=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),a=n[0],o=n[1],i=c.a.useState(""),s=Object(u.a)(i,2),r=s[0],l=s[1],d=c.a.useState(!1),h=Object(u.a)(d,2),_=h[0],j=h[1],b=c.a.useState(!1),f=Object(u.a)(b,2),m=f[0],O=f[1],v=c.a.useState(""),g=Object(u.a)(v,2),x=g[0],C=g[1],N=c.a.useState(""),y=Object(u.a)(N,2),S=y[0],A=y[1],L=c.a.useState(!0),U=Object(u.a)(L,2),T=U[0],R=U[1];return c.a.useEffect((function(){o(""),l(""),j(!1),O(!1),C(""),A("")}),[e.isOpen]),c.a.useEffect((function(){R(!_||!m)}),[_,m]),Object(p.jsxs)(k,{header:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isButtonHidden:T,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({title:a,link:r})},children:[Object(p.jsx)("input",{className:"popup__input popup__input_content_title",type:"text",value:a||"",onChange:function(e){o(e.target.value),e.target.validity.valid?(j(!0),C("")):(j(!1),C(e.target.validationMessage))},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",autoComplete:"off",required:!0}),Object(p.jsx)("span",{className:"popup__input-error".concat(_?"":" popup__input-error_visible"),children:x}),Object(p.jsx)("input",{className:"popup__input popup__input_content_link",type:"url",value:r||"",onChange:function(e){l(e.target.value),e.target.validity.valid?(O(!0),A("")):(O(!1),A(e.target.validationMessage))},placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off",required:!0}),Object(p.jsx)("span",{className:"popup__input-error".concat(m?"":" popup__input-error_visible"),children:S})]})};var S=function(e){return Object(p.jsx)("div",{className:"popup".concat(e.isOpen?" popup_opened":""),hidden:!0,children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("div",{className:"popup__image".concat(e.isRegistered?" popup__image_type_success":" popup__image_type_failed")}),Object(p.jsx)("h2",{className:"popup__header popup__header_mode_info",children:e.isRegistered?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(p.jsx)("button",{className:"popup__close-button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})]})})},A=n(13),L=n(14),U=new(function(){function e(t){Object(A.a)(this,e),this._baseUrl=t.baseUrl,this._cohort=t.cohort,this._token=t.token}return Object(L.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/").concat(this._cohort,"/users/me"),{method:"GET",headers:{authorization:this._token,"content-type":"application/json"}}).then(this._checkResponse)}},{key:"updateProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/").concat(this._cohort,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"content-type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._cohort,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"content-type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/").concat(this._cohort,"/cards"),{method:"GET",headers:{authorization:this._token,"content-type":"application/json"}}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/").concat(this._cohort,"/cards"),{method:"POST",headers:{authorization:this._token,"content-type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._cohort,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"content-type":"application/json"}}).then(this._checkResponse)}},{key:"checkLike",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._cohort,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"content-type":"application/json"}}).then(this._checkResponse)}},{key:"uncheckLike",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._cohort,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"content-type":"application/json"}}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1",cohort:"cohort-21",token:"e0650d2e-cc1d-4b7b-999a-f7cf471dfca5"}),T=new(function(){function e(t){Object(A.a)(this,e),this._baseUrl=t.baseUrl}return Object(L.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"register",value:function(e){var t=e.email,n=e.password;return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n,email:t})}).then(this._checkResponse)}},{key:"authorize",value:function(e){var t=e.password,n=e.email;return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(this._checkResponse)}},{key:"getContent",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._checkResponse)}}]),e}())({baseUrl:"https://auth.nomoreparties.co"});var R=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],o=c.a.useState(!1),i=Object(u.a)(o,2),s=i[0],h=i[1],b=c.a.useState({}),O=Object(u.a)(b,2),k=O[0],A=O[1],L=c.a.useState(!1),R=Object(u.a)(L,2),E=R[0],w=R[1],I=c.a.useState(!1),P=Object(u.a)(I,2),B=P[0],D=P[1],z=c.a.useState(!1),q=Object(u.a)(z,2),M=q[0],H=q[1],J=c.a.useState(!1),Q=Object(u.a)(J,2),G=Q[0],V=Q[1],Y=c.a.useState({}),K=Object(u.a)(Y,2),X=K[0],Z=K[1],F={name:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u0430",link:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII="},W=c.a.useState([]),$=Object(u.a)(W,2),ee=$[0],te=$[1],ne=c.a.useState(!1),ae=Object(u.a)(ne,2),ce=ae[0],oe=ae[1],ie=c.a.useState(F),se=Object(u.a)(ie,2),re=se[0],ue=se[1],le=Object(l.g)();function pe(){w(!1),D(!1),H(!1),V(!1),oe(!1),ue(F)}return c.a.useEffect((function(){var e=localStorage.getItem("token");return e&&T.getContent(e).then((function(e){A({email:e.data.email}),h(!0),le.push("/"),console.log("\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!")})).catch((function(e){console.log("".concat(e,". \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f."))})),function(){return A({})}}),[le]),c.a.useEffect((function(){return U.getInitialCards().then((function(e){te(e),console.log("\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b!")})).catch((function(e){console.log("".concat(e,". \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."))})),function(){return te([])}}),[]),c.a.useEffect((function(){return U.getUserInfo().then((function(e){Z(e),console.log("\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b!")})).catch((function(e){console.log("".concat(e,". \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u0440\u043e\u0444\u0438\u043b\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."))})),function(){Z({})}}),[]),Object(p.jsx)(m.Provider,{value:X,children:Object(p.jsx)("div",{className:"page",children:Object(p.jsxs)("div",{className:"page__container",children:[Object(p.jsxs)(l.d,{children:[Object(p.jsxs)(l.b,{path:"/sign-up",children:[Object(p.jsx)(f,{redirectLink:"/sign-in",redirectText:"\u0412\u043e\u0439\u0442\u0438"}),Object(p.jsx)(_,{onRegister:function(e){var t=e.email,n=e.password;T.register({email:t,password:n}).then((function(e){a(!0),le.push("/sign-in"),console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e! \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442.")})).catch((function(e){a(!1),console.log("".concat(e,". \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."))})).finally((function(){V(!0)}))}})]}),Object(p.jsxs)(l.b,{path:"/sign-in",children:[Object(p.jsx)(f,{redirectLink:"/sign-up",redirectText:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsx)(j,{handleLogin:function(e){var t=e.email,n=e.password;T.authorize({email:t,password:n}).then((function(e){A({email:t}),h(!0),le.push("/"),localStorage.setItem("token",e.token),console.log("\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!")})).catch((function(e){console.log("".concat(e,". \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f."))}))}})]}),Object(p.jsxs)(d,{path:"/",isLoggedIn:s,children:[Object(p.jsx)(f,{redirectLink:"/",redirectText:"\u0412\u044b\u0439\u0442\u0438",onRedirect:function(){h(!1),localStorage.removeItem("token")},userInfo:k}),Object(p.jsx)(v,{onEditAvatar:function(){w(!0)},onEditProfile:function(){D(!0)},onAddPlace:function(){H(!0)},onOpenCard:function(e){oe(!0),ue({caption:e.name,link:e.link})},onCardLike:function(e){e.likes.some((function(e){return e._id===X._id}))?U.uncheckLike(e._id).then((function(t){te(ee.map((function(n){return n._id===e._id?t:n}))),console.log("\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043b\u0430\u0439\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e!")})).catch((function(e){console.log("".concat(e,". \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043b\u0430\u0439\u043a\u0430."))})):U.checkLike(e._id).then((function(t){te(ee.map((function(n){return n._id===e._id?t:n}))),console.log("\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043b\u0430\u0439\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e!")})).catch((function(e){console.log("".concat(e,". \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043b\u0430\u0439\u043a\u0430."))}))},onCardDelete:function(e){U.deleteCard(e._id).then((function(t){te(ee.filter((function(t){return t._id!==e._id}))),console.log("\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0430!")})).catch((function(e){console.log("".concat(e,". \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."))}))},cards:ee}),Object(p.jsx)(g,{})]})]}),Object(p.jsx)(N,{isOpen:E,onClose:pe,onUpdateAvatar:function(e){var t=e.avatarLink;U.updateAvatar(t).then((function(e){Z(e),console.log("\u0410\u0432\u0430\u0442\u0430\u0440 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d!"),pe()})).catch((function(e){console.log("".concat(e,". \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440."))}))}}),Object(p.jsx)(C,{isOpen:B,onClose:pe,onUpdateUser:function(e){var t=e.name,n=e.description;U.updateProfile(t,n).then((function(e){Z(e),console.log("\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d!"),pe()})).catch((function(e){console.log("".concat(e,". \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c."))}))}}),Object(p.jsx)(y,{isOpen:M,onClose:pe,onAddPlace:function(e){var t=e.title,n=e.link;U.addCard(t,n).then((function(e){te([e].concat(Object(r.a)(ee))),console.log("\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430!"),pe()})).catch((function(e){console.log("".concat(e,". \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443."))}))}}),Object(p.jsx)(x,{card:re,isOpen:ce,onClose:pe}),Object(p.jsx)(S,{isOpen:G,onClose:pe,isRegistered:n})]})})})};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(s.a,{children:Object(p.jsx)(R,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c25d887b.chunk.js.map
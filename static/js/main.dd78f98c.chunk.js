(this["webpackJsonpreact-credestados"]=this["webpackJsonpreact-credestados"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(12),n=a.n(c),i=(a(36),a(4)),r=a(2),o=a(3),l=(a(37),a(24)),d=(a(47),a(0)),j=["btn--primary","btn--outline","btn--green"],m=["btn--medium","btn--large"],b=function(e){var t=e.children,a=e.type,s=e.onClick,c=e.sectionName,n=e.buttonStyle,i=e.buttonSize,r=j.includes(n)?n:j[0],o=m.includes(i)?i:m[0],b=c||"";return Object(d.jsx)(l.Link,{to:b,smooth:!0,offset:-75,className:"btn-mobile",activeClass:"active",children:Object(d.jsx)("button",{className:"btn ".concat(r," ").concat(o," shadow-1"),onClick:s,type:a,children:t})})},x=function(e){var t=e.children,a=e.type,s=e.onClick,c=e.pageName,n=e.buttonStyle,r=e.buttonSize,o=j.includes(n)?n:j[0],l=m.includes(r)?r:m[0],b=c||"";return Object(d.jsx)(i.b,{to:b,className:"btn-mobile",activeClass:"active",children:Object(d.jsx)("button",{className:"btn ".concat(o," ").concat(l," shadow-1"),onClick:s,type:a,children:t})})};var h=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],n=function(){return c(!1)};return window.addEventListener("scroll",(function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.getElementById("navbar");e>50?t.classList.add("shadow-3"):t.classList.remove("shadow-3")})),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("nav",{className:"navbar",id:"navbar",children:Object(d.jsxs)("div",{className:"navbar-container container",children:[Object(d.jsx)(i.b,{to:"/",className:"navbar-logo",onClick:n,children:Object(d.jsx)("img",{src:"/images/logo.png",alt:"Logo"})}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){return c(!a)},children:Object(d.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(d.jsxs)("ul",{className:a?"nav-menu active shadow-3":"nav-menu",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.c,{activeClassName:"active",to:"/",className:"nav-link",onClick:n,children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.c,{activeClassName:"active",to:"emprestimo",className:"nav-link",onClick:n,children:"Empr\xe9stimo"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.c,{activeClassName:"active",to:"fgts",className:"nav-link",onClick:n,children:"FGTS"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLScBeveHxeglbvr38am6FIliXA5IYSQ2Kp4JlXzr6AdWBFrYHw/viewform",className:"nav-link",children:"Trabalhe conosco"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{target:"_blank",href:"https://credestados.stormfin.com.br/",className:"nav-link",children:"Colaborador"})}),Object(d.jsxs)(x,{onClick:function(){return window.open("https://wa.me/554791515234","_blank")},type:"button",buttonStyle:"btn--outline",children:[" ",Object(d.jsx)("i",{className:"fab fa-whatsapp"})," Fale conosco"]})]})]})})})},O=(a(49),a(50),a(6)),u=(a(51),a(52),function(e){var t=e.imgPath,a=e.h1,s=e.buttonText,c=e.buttonTarget,n=e.slideIndex;return Object(d.jsxs)("div",{className:"slide",children:[Object(d.jsx)("img",{className:"slide-".concat(n),src:""+t,alt:a}),Object(d.jsx)("div",{className:"cover"}),Object(d.jsxs)("div",{className:"content container",children:[Object(d.jsx)("h1",{children:a}),Object(d.jsx)(x,{buttonSize:"btn--large",pageName:c,children:s})]})]})}),p=function(e){var t=e.translate,a=(e.transition,e.width);return Object(d.jsxs)("div",{className:"slider-content",style:{height:"calc(100vh - var(--menu-height))",transform:"translateX(-".concat(t,"px)"),display:"flex",width:"".concat(a,"px")},children:[Object(d.jsx)(u,{h1:"Antecipe o seu FGTS e receba seu dinheiro em poucas horas",imgPath:"/images/hero-01.jpg",buttonText:"Saber mais",buttonTarget:"fgts",slideIndex:"1"}),Object(d.jsx)(u,{h1:"Portabilidade: reduza sua parcela com taxas a partir de 1,15% a.m",imgPath:"/images/hero-02.jpg",buttonText:"Saber mais",buttonTarget:"/",slideIndex:"2"}),Object(d.jsx)(u,{h1:"Empr\xe9stimos consignados com as melhores taxas do mercado",imgPath:"/images/hero-03.jpg",buttonText:"Saber mais",buttonTarget:"emprestimo",slideIndex:"3"})]})},g=function(e){var t=e.direction,a=e.handleClick;return Object(d.jsx)("div",{className:"arrow",style:{left:"left"===t?".25rem":"auto",right:"right"===t?".25rem":"auto"},onClick:a,children:Object(d.jsx)("img",{src:"right"===t?"/images/arrow-right.svg":"/images/arrow-left.svg"})})},f=function(){var e=Object(s.useState)(window.innerWidth),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)({activeIndex:0,translate:0,transition:.45}),i=Object(o.a)(n,2),r=i[0],l=i[1],j=r.translate,m=r.transition,b=r.activeIndex;return window.addEventListener("resize",(function(){c(window.innerWidth)})),Object(d.jsxs)("div",{className:"slider-container",children:[Object(d.jsx)(g,{direction:"left",handleClick:function(){l(0===b?Object(O.a)(Object(O.a)({},r),{},{translate:2*a,activeIndex:2}):Object(O.a)(Object(O.a)({},r),{},{translate:(b-1)*a,activeIndex:b-1}))}}),Object(d.jsx)(p,{translate:j,transition:m,width:3*a}),Object(d.jsx)(g,{direction:"right",handleClick:function(){l(2===b?Object(O.a)(Object(O.a)({},r),{},{translate:0,activeIndex:0}):Object(O.a)(Object(O.a)({},r),{},{translate:(b+1)*a,activeIndex:b+1}))}})]})};var v=function(){return Object(d.jsx)("section",{className:"home-header",children:Object(d.jsx)(f,{})})},N=(a(53),["align--left","align--center","align--right"]),w=function(e){var t=e.title,a=e.subTitle,s=e.alignment,c=N.includes(s)?s:N[0];return Object(d.jsxs)("div",{className:"title-container ".concat(c),children:[Object(d.jsx)("span",{children:a}),Object(d.jsx)("h2",{children:t})]})};a(54);var S=function(){return Object(d.jsx)("section",{className:"padding--default",id:"quem-somos",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(w,{title:"A empresa de cr\xe9dito que est\xe1 ao seu lado",subTitle:"QUEM SOMOS",alignment:"align--center"}),Object(d.jsx)("img",{src:"/images/logo-completa.png",alt:"Logo"}),Object(d.jsxs)("div",{className:"text-button",children:[Object(d.jsxs)("p",{children:["A Cred Estados \xe9 uma ",Object(d.jsx)("strong",{children:"empresa s\xf3lida"})," que se destaca no mercado financeiro por oferecer ",Object(d.jsx)("strong",{children:"excelentes servi\xe7os e produtos de cr\xe9dito consignado e pessoal"}),", representando os principais bancos e institui\xe7\xf5es financeiras."]}),Object(d.jsxs)("p",{children:["Nosso objetivo \xe9 oferecer para nossos clientes as ",Object(d.jsx)("strong",{children:"melhores solu\xe7\xf5es em cr\xe9dito."})]}),Object(d.jsxs)("p",{children:["Estamos sempre em busca de novas tecnologias, ",Object(d.jsx)("strong",{children:"condi\xe7\xf5es diferenciadas"})," e o principal: um ",Object(d.jsx)("strong",{children:"atendimento de qualidade"})," para nossos clientes."]}),Object(d.jsxs)(x,{onClick:function(){return window.open("https://wa.me/554791515234","_blank")},children:[Object(d.jsx)("i",{className:"fab fa-whatsapp"})," Fale conosco"]})]})]})})},C=(a(55),function(e){var t=e.iconPath,a=e.title,s=e.text;return Object(d.jsxs)("div",{className:"icon-text",children:[Object(d.jsx)("img",{src:""+t,alt:a}),Object(d.jsx)("h3",{children:a}),Object(d.jsx)("p",{children:s})]})});a(56);var k=function(){return Object(d.jsx)("section",{className:"padding--default bg--light-grey",id:"diferenciais",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(w,{title:"Especialistas em servi\xe7os financeiros",subTitle:"DIFERENCIAIS",alignment:"align--left"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(C,{iconPath:"/images/icone-06.png",title:"Sem consulta ao Serasa",text:"N\xe3o consultamos o SPC/Serasa para liberar cr\xe9dito (exceto cr\xe9dito pessoal)."}),Object(d.jsx)(C,{iconPath:"/images/icone-02.png",title:"As melhores taxas",text:"Nosso objetivo \xe9 ajudar voc\xea a alcan\xe7ar os seus objetivos. Oferecemos sempre as melhores condi\xe7\xf5es."}),Object(d.jsx)(C,{iconPath:"/images/icone-03.png",title:"Atendimento diferenciado",text:"Nossa equipe de consultores est\xe1 preparada e \xe0 disposi\xe7\xe3o para te atender da melhor forma."}),Object(d.jsx)(C,{iconPath:"/images/icone-01.png",title:"Dinheiro f\xe1cil e r\xe1pido",text:"Com a CredEstados voc\xea recebe seu cr\xe9dito em at\xe9 24h sem nem sair de casa."})]}),Object(d.jsxs)(x,{onClick:function(){return window.open("https://wa.me/554791515234","_blank")},children:[Object(d.jsx)("i",{className:"fab fa-whatsapp"})," Fale conosco"]})]})})},T=a(25),E=a(26),I=a(31),A=a(30),y=a(27),P=a.n(y),F=function(e){Object(I.a)(a,e);var t=Object(A.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"slider-parceiros",children:Object(d.jsxs)(P.a,Object(O.a)(Object(O.a)({},{dots:!1,infinite:!0,speed:250,slidesToShow:4,slidesToScroll:1,autoplay:!0,arrows:!1,responsive:[{breakpoint:875,settings:{slidesToShow:3}},{breakpoint:575,settings:{slidesToShow:2}}]}),{},{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"/images/parceiro-01.png",alt:"Parceiro"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"/images/parceiro-02.png",alt:"Parceiro"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"/images/parceiro-03.png",alt:"Parceiro"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"/images/parceiro-04.png",alt:"Parceiro"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"/images/parceiro-05.png",alt:"Parceiro"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"/images/parceiro-06.png",alt:"Parceiro"})}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"/images/parceiro-07.png",alt:"Parceiro"})})]}))})}}]),a}(s.Component);a(72);var R=function(){return Object(d.jsx)("section",{className:"padding--default",id:"parceiros",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(w,{title:"Trabalhamos com as principais institui\xe7\xf5es financeiras do pa\xeds",subTitle:"PARCEIROS",alignment:"align--center"}),Object(d.jsx)(F,{})]})})};var _=function(){return Object(d.jsxs)("main",{className:"page__home",children:[Object(d.jsx)(v,{}),Object(d.jsx)(S,{}),Object(d.jsx)(k,{}),Object(d.jsx)("img",{src:"/images/pattern-01.png",className:"padrao padrao-01",alt:"CredEstados"}),Object(d.jsx)(R,{})]})};a(73),a(74);var G=function(){return Object(d.jsx)("section",{id:"fgts-header",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("img",{className:"header-img",src:"/images/saque-fgts.png",alt:"Saque FGTS"}),Object(d.jsxs)("h1",{children:["Antecipe as parcelas do seu FGTS com as melhores taxas e ",Object(d.jsx)("strong",{children:"receba seu dinheiro em poucas horas"})]}),Object(d.jsx)(b,{sectionName:"fgts-simulador",buttonSize:"btn--large",children:"Simular"})]})})},L=a(28);a(75);var q=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),i=Object(o.a)(n,2),r=i[0],l=i[1];return Object(d.jsx)("section",{className:"padding--default bg--light-grey",id:"fgts-simulador",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(w,{title:"Veja quanto voc\xea pode retirar do seu fundo de garantia",subTitle:"SIMULAR SAQUE",alignment:"align--left"}),Object(d.jsx)("div",{className:"text",children:Object(d.jsxs)("p",{children:["Antecipe as parcelas anuais do seu Saque-Anivers\xe1rio.",Object(d.jsx)("br",{}),"Informe seu saldo e o seu anivers\xe1rio e conhe\xe7a as condi\xe7\xf5es."]})}),Object(d.jsxs)("form",{id:"fgts-form",className:"card-simulacao-fgts shadow-2",children:[Object(d.jsxs)("div",{className:"card-header",children:[Object(d.jsx)("i",{class:"fas fa-piggy-bank"}),Object(d.jsx)("h3",{children:"Saque FGTS"})]}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{className:"body-row valor",children:[Object(d.jsx)("span",{children:"Saldo FGTS"}),Object(d.jsx)(L.a,{required:!0,thousandSeparator:".",decimalSeparator:",",decimalScale:"2",prefix:"R$ ",id:"saldo-fgts",type:"text",placeholder:"R$ 0",onChange:function(e){return c(e.target.value)}})]}),Object(d.jsxs)("div",{className:"body-row aniversario",children:[Object(d.jsx)("span",{children:"Seu anivers\xe1rio"}),Object(d.jsx)("input",{required:!0,onChange:function(e){return l(e.target.value)},type:"date"})]})]}),Object(d.jsx)(x,{onClick:function(){var e,t,s,c=document.getElementById("fgts-form");if(c.checkValidity()){var n=encodeURIComponent("Ol\xe1, gostaria de uma simula\xe7\xe3o para antecipa\xe7\xe3o do FGTS!\n\nMeu saldo \xe9 de ".concat(a," e meu anivers\xe1rio \xe9 no dia ").concat((e=r.substr(0,4),t=r.substr(5,2),s=r.substr(8,2),new Date(e,t-1,s).toLocaleDateString()),"."));window.open("https://wa.me/554791515234?text=".concat(n),"_blank")}else c.reportValidity()},buttonStyle:"btn--primary",children:"Simular"})]})]})})},B=(a(76),function(e){var t=e.text;return Object(d.jsxs)("div",{className:"container--condicao",children:[Object(d.jsx)("i",{class:"far fa-check-circle"}),Object(d.jsx)("p",{children:t})]})});a(77);var D=function(){return Object(d.jsx)("section",{className:"padding--default",id:"fgts-condicoes",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(w,{title:"Confira as condi\xe7\xf5es para contratar a Antecipa\xe7\xe3o Saque-Anivers\xe1rio com FGTS",subTitle:"CONDI\xc7\xd5ES",alignment:"align--left"}),Object(d.jsxs)("div",{className:"container--condicoes",children:[Object(d.jsx)(B,{text:"Ser maior de 18 anos ou emancipado"}),Object(d.jsx)(B,{text:"Ter situa\xe7\xe3o regular com a Receita Federal"}),Object(d.jsx)(B,{text:"Possuir conta corrente ou poupan\xe7a"}),Object(d.jsx)(B,{text:"Ter saldo do FGTS em conta ativa ou inativa"}),Object(d.jsx)(B,{text:"Ser optante da modalidade Saque-Anivers\xe1rio do FGTS"})]}),Object(d.jsxs)(x,{onClick:function(){return window.open("https://wa.me/554791515234?text=".concat(encodeURI("Ol\xe1, gostaria de uma simula\xe7\xe3o de saque-anivers\xe1rio do FGTS!")),"_blank")},children:[Object(d.jsx)("i",{class:"fab fa-whatsapp"})," Fale conosco"]})]})})};a(78);var z=function(){return Object(d.jsxs)("section",{className:"padding--default bg--light-grey",id:"fgts-vantagens",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(w,{title:"Conhe\xe7a as vantagens da antecipa\xe7\xe3o do Saque-Anivers\xe1rio com a CredEstados",subTitle:"VANTAGENS",alignment:"align--left"}),Object(d.jsxs)("div",{className:"container--vantagens",children:[Object(d.jsx)(C,{iconPath:"/images/icone-01.png",title:"Taxas a partir de 1,59% a.m.",text:"Cr\xe9dito pessoal com as melhores condi\xe7\xf5es no mercado."}),Object(d.jsx)(C,{iconPath:"/images/icone-02.png",title:"Contrate a partir de R$ 300,00",text:"F\xe1cil contrata\xe7\xe3o e pagamento r\xe1pido na conta, tudo digital."}),Object(d.jsx)(C,{iconPath:"/images/icone-07.png",title:"Menos d\xedvidas",text:"Zero parcelas mensais, o desconto \xe9 feito anualmente no FGTS."}),Object(d.jsx)(C,{iconPath:"/images/icone-06.png",title:"Sem consulta ao Serasa",text:"N\xe3o consultamos o SPC/Serasa para liberar cr\xe9dito (exceto cr\xe9dito pessoal)."})]}),Object(d.jsxs)(x,{onClick:function(){return window.open("https://wa.me/554791515234?text=".concat(encodeURI("Ol\xe1, gostaria de uma simula\xe7\xe3o de saque-anivers\xe1rio do FGTS!")),"_blank")},children:[Object(d.jsx)("i",{class:"fab fa-whatsapp"})," Fale conosco"]})]}),Object(d.jsx)("div",{className:"container--img"})]})};var U=function(){return Object(d.jsxs)("main",{id:"page__fgts",children:[Object(d.jsx)(G,{}),Object(d.jsx)(q,{}),Object(d.jsx)("img",{src:"/images/pattern-01.png",className:"padrao padrao-01",alt:"CredEstados"}),Object(d.jsx)(D,{}),Object(d.jsx)("img",{src:"/images/pattern-02.png",className:"padrao padrao-02",alt:"CredEstados"}),Object(d.jsx)(z,{})]})};a(79),a(80);var H=function(){return Object(d.jsx)("section",{id:"emprestimo-header",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("img",{className:"header-img",src:"/images/emprestimo-consignado.png",alt:"Empr\xe9stimo consignado"}),Object(d.jsxs)("h1",{children:["As melhores condi\xe7\xf5es do mercado para ",Object(d.jsx)("strong",{children:"empr\xe9stimo consignado"})]}),Object(d.jsxs)(x,{onClick:function(){return window.open("https://wa.me/554791515234?text=".concat(encodeURI("Ol\xe1, gostaria de uma simula\xe7\xe3o de empr\xe9stimo!")),"_blank")},buttonSize:"btn--large",children:[Object(d.jsx)("i",{class:"fab fa-whatsapp"})," Simular"]})]})})};a(81);var M=function(){var e=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth};return Object(d.jsxs)("section",{className:"padding--default bg--light-grey",id:"emprestimo-sobre",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(w,{title:"O que \xe9 o Emprestimo Consignado?",subTitle:"SOBRE",alignment:"align--left"}),Object(d.jsxs)("p",{className:"text-content",children:["O empr\xe9stimo consignado \xe9 uma modalidade de cr\xe9dito destinada a aposentados, pensionistas e servidores p\xfablicos. ",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"No consignado, o valor das parcelas de seu empr\xe9stimo \xe9 descontado automaticamente de sua folha de pagamento ou benef\xedcio do INSS."]}),Object(d.jsxs)(x,{onClick:function(){return window.open("https://wa.me/554791515234?text=".concat(encodeURI("Ol\xe1, gostaria de uma simula\xe7\xe3o de empr\xe9stimo!")),"_blank")},children:[" ",Object(d.jsx)("i",{className:"fab fa-whatsapp"})," Simular"]})]}),Object(d.jsx)("img",{className:"img-content",src:function(){var t=Object(s.useState)(e()),a=Object(o.a)(t,2),c=a[0],n=a[1];return Object(s.useEffect)((function(){var t=function(){n(e())};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),c}()>=960?"/images/emprestimo-sobre-large.png":"/images/emprestimo-sobre.png",alt:"Empr\xe9stimo consignado"})]})},W=(a(82),function(e){var t=e.imgPath,a=e.text,s="https://wa.me/554791515234?text=".concat(encodeURI("Ol\xe1, gostaria de uma simula\xe7\xe3o de empr\xe9stimo para ".concat(a.toLowerCase(),"!")));return Object(d.jsx)("a",{target:"_blank",href:s,children:Object(d.jsxs)("div",{className:"card-emprestimo shadow-2",children:[Object(d.jsx)("div",{className:"cover"}),Object(d.jsx)("div",{className:"hover"}),Object(d.jsx)("img",{src:""+t,alt:a}),Object(d.jsx)("h3",{children:a})]})})});a(83);var Y=function(){return Object(d.jsx)("section",{className:"padding--default",id:"emprestimo-categorias",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(w,{title:"Temos a solu\xe7\xe3o certa para voc\xea",subTitle:"CATEGORIAS",alignment:"align--left"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(W,{imgPath:"/images/emprestimo-01.jpg",text:"APOSENTADOS INSS"}),Object(d.jsx)(W,{imgPath:"/images/emprestimo-02.jpg",text:"PENSIONISTAS INSS"}),Object(d.jsx)(W,{imgPath:"/images/emprestimo-03.jpg",text:"SERVIDORES P\xdaBLICOS"}),Object(d.jsx)(W,{imgPath:"/images/emprestimo-04.jpg",text:"FOR\xc7AS ARMADAS"}),Object(d.jsx)(W,{imgPath:"/images/emprestimo-05.jpg",text:"CART\xc3O DE CR\xc9DITO CONSIGNADO"}),Object(d.jsx)(W,{imgPath:"/images/emprestimo-06.jpg",text:"PORTABILIDADE DE CR\xc9DITO"})]}),Object(d.jsxs)(x,{onClick:function(){return window.open("https://wa.me/554791515234","_blank")},children:[" ",Object(d.jsx)("i",{className:"fab fa-whatsapp"})," Simular"]})]})})},Q=(a(84),function(e){var t=e.text;return Object(d.jsx)("a",{className:"link-emprestimo",target:"_blank",href:function(){var e="Ol\xe1! Gostaria de uma simula\xe7\xe3o de empr\xe9stimo para ".concat(t,"!"),a=encodeURIComponent(e);return"https://wa.me/554791515234?text=".concat(a)}(),children:t})});a(85);var V=function(){return Object(d.jsx)("section",{className:"padding--default bg--light-grey",id:"emprestimo-opcoes",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(w,{title:"Selecione o que voc\xea deseja fazer com seu empr\xe9stimo!",subTitle:"OP\xc7\xd5ES",alignment:"align--center"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(Q,{text:"comprar um apartamento"}),Object(d.jsx)(Q,{text:"pagar minhas d\xedvidas"}),Object(d.jsx)(Q,{text:"reformar minha casa"}),Object(d.jsx)(Q,{text:"comprar um carro"}),Object(d.jsx)(Q,{text:"viajar"}),Object(d.jsx)(Q,{text:"complementar a renda"}),Object(d.jsx)(Q,{text:"abrir meu pr\xf3prio neg\xf3cio"}),Object(d.jsx)(Q,{text:"emerg\xeancia de sa\xfade"})]})]})})};var X=function(){return Object(d.jsxs)("main",{className:"page__emprestimo",children:[Object(d.jsx)(H,{}),Object(d.jsx)(M,{}),Object(d.jsx)("img",{src:"/images/pattern-01.png",className:"padrao padrao-01",alt:"CredEstados"}),Object(d.jsx)(Y,{}),Object(d.jsx)("img",{src:"/images/pattern-02.png",className:"padrao padrao-02",alt:"CredEstados"}),Object(d.jsx)(V,{})]})};a(86);var J=function(){return window.addEventListener("scroll",(function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.getElementById("whatsapp-icon");e>50?t.classList.add("display"):t.classList.remove("display")})),Object(d.jsxs)("footer",{className:"bg--light-grey",children:[Object(d.jsx)("a",{target:"_blank",ty:!0,href:"https://wa.me/554791515234",id:"whatsapp-icon",className:"shadow-2",children:Object(d.jsx)("i",{class:"fab fa-whatsapp"})}),Object(d.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.537323684257!2d-48.64222938440911!3d-26.981547502578376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cb8aa79ba3c9%3A0x581d0da1d710c19f!2sCred%20Estados%20Empr%C3%A9stimos%20Consignados!5e0!3m2!1spt-BR!2sbr!4v1637241714308!5m2!1spt-BR!2sbr",width:"100%",height:"450",style:{border:0},allowfullscreen:"",loading:"lazy"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"logo-social",children:[Object(d.jsx)("img",{src:"/images/logo-completa.png",alt:"Logo"}),Object(d.jsxs)("div",{className:"social-icons",children:[Object(d.jsx)("a",{target:"_blank",href:"https://wa.me/554791515234",children:Object(d.jsx)("i",{class:"fab fa-whatsapp"})}),Object(d.jsx)("a",{target:"_blank",href:"https://www.facebook.com/credestados",children:Object(d.jsx)("i",{class:"fab fa-facebook-f"})}),Object(d.jsx)("a",{target:"_blank",href:"https://www.instagram.com/credestados/",children:Object(d.jsx)("i",{class:"fab fa-instagram"})})]})]}),Object(d.jsxs)("div",{className:"column navigation",children:[Object(d.jsx)("h3",{children:"Navegar"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"emprestimo",children:"Empr\xe9stimo"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"fgts",children:"FGTS"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLScBeveHxeglbvr38am6FIliXA5IYSQ2Kp4JlXzr6AdWBFrYHw/viewform",children:"Trabalhe conosco"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",href:"https://credestados.stormfin.com.br/",children:"Colaborador"})})]})]}),Object(d.jsxs)("div",{className:"column icons",children:[Object(d.jsx)("h3",{children:"Entre em contato"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("a",{target:"_blank",href:"mailto:contato@credestados.com.br",children:[Object(d.jsx)("i",{class:"fas fa-envelope"}),Object(d.jsx)("span",{children:"contato@credestados.com.br"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{target:"_blank",href:"tel:(47) 3268-4843",children:[Object(d.jsx)("i",{class:"fas fa-phone-alt"}),Object(d.jsx)("span",{children:"(47) 3268-4843"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{target:"_blank",href:"https://www.google.com/maps?ll=-26.981552,-48.640041&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6349246038411362719",children:[Object(d.jsx)("i",{class:"fas fa-map-marker-alt"}),Object(d.jsxs)("span",{children:["Av. do Estado Dalmo Vieira, 2985",Object(d.jsx)("br",{}),"Centro, Balne\xe1rio Cambori\xfa - SC"]})]})})]})]})]}),Object(d.jsx)("div",{className:"copyright",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("span",{children:["\xa9 Credestados ",(new Date).getFullYear()]}),Object(d.jsxs)("a",{href:"https://web.whatsapp.com/send?phone=554792569136&text=Ol%C3%A1%2C%20encontrei%20seu%20contato%20no%20site%20da%20CredEstados%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20desenvolver%20o%20site%20do%20meu%20neg%C3%B3cio!",target:"_blank",children:["Desenvolvido por ",Object(d.jsx)("strong",{children:"Guilherme Hammes"})]})]})})]})};function K(){var e=Object(r.e)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var $=a(29),Z=a.n($);var ee=function(){return Z.a.initialize({gtmId:"GTM-KKGNT99"}),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(K,{}),Object(d.jsx)(h,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",element:Object(d.jsx)(_,{})}),Object(d.jsx)(r.a,{exact:!0,path:"fgts",element:Object(d.jsx)(U,{})}),Object(d.jsx)(r.a,{exact:!0,path:"emprestimo",element:Object(d.jsx)(X,{})}),Object(d.jsx)(r.a,{exact:!0,path:"/*",element:Object(d.jsx)(_,{})})]}),Object(d.jsx)(J,{})]})})};n.a.render(Object(d.jsx)(ee,{}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.dd78f98c.chunk.js.map
(this["webpackJsonpreact-credestados"]=this["webpackJsonpreact-credestados"]||[]).push([[0],{31:function(e,s,t){},32:function(e,s,t){},42:function(e,s,t){},44:function(e,s,t){},60:function(e,s,t){},61:function(e,s,t){},62:function(e,s,t){},63:function(e,s,t){},64:function(e,s,t){},65:function(e,s,t){},66:function(e,s,t){},67:function(e,s,t){},68:function(e,s,t){},69:function(e,s,t){},70:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(10),i=t.n(c),n=(t(31),t(5)),o=(t(32),t(2)),r=(t(42),t(0)),l=["btn--primary","btn--outline","btn--green"],j=["btn--medium","btn--large"],d=function(e){var s=e.children,t=e.type,a=e.onClick,c=e.sectionId,i=e.buttonStyle,n=e.buttonSize,d=l.includes(i)?i:l[0],m=j.includes(n)?n:j[0],b=c||"/";return Object(r.jsx)(o.Link,{to:b,className:"btn-mobile",activeClass:"active",spy:!0,smooth:!0,children:Object(r.jsx)("button",{className:"btn ".concat(d," ").concat(m," shadow-1"),onClick:a,type:t,children:s})})};var m=function(){var e=Object(a.useState)(!1),s=Object(n.a)(e,2),t=s[0],c=s[1],i=function(){return c(!1)};return window.addEventListener("scroll",(function(){var e=window.pageYOffset||document.documentElement.scrollTop,s=document.getElementById("navbar");e>50?s.classList.add("shrink"):s.classList.remove("shrink")})),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar shadow-3",id:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container container",children:[Object(r.jsx)(o.Link,{to:"hero",className:"navbar-logo",onClick:i,activeClass:"active",spy:!0,smooth:!0,children:Object(r.jsx)("img",{src:"/public_html/images/logo.png",alt:"Logo"})}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){return c(!t)},children:Object(r.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:t?"nav-menu active shadow-3":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.Link,{to:"quem-somos",className:"nav-link",onClick:i,activeClass:"active",spy:!0,smooth:!0,children:"Quem somos"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.Link,{to:"diferenciais",className:"nav-link",onClick:i,activeClass:"active",spy:!0,smooth:!0,children:"Diferenciais"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.Link,{to:"emprestimo",className:"nav-link",onClick:i,activeClass:"active",spy:!0,smooth:!0,children:"Empr\xe9stimo"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.Link,{to:"fgts",className:"nav-link",onClick:i,activeClass:"active",spy:!0,smooth:!0,children:"FGTS"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.Link,{to:"parceiros",className:"nav-link",onClick:i,activeClass:"active",spy:!0,smooth:!0,children:"Parceiros"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.Link,{to:"/",className:"nav-link",onClick:i,activeClass:"active",spy:!0,smooth:!0,children:"Colaborador"})}),Object(r.jsxs)(d,{onClick:function(){return window.open("https://wa.me/554797527024","_blank")},type:"button",buttonStyle:"btn--outline",children:[" ",Object(r.jsx)("i",{className:"fab fa-whatsapp"})," Fale conosco"]})]})]})})})},b=(t(44),t(3)),h=t(11),p=t(12),O=t(15),x=t(14),u=t(13),g=t.n(u),v=function(e){Object(O.a)(t,e);var s=Object(x.a)(t);function t(){return Object(h.a)(this,t),s.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"slider-hero",children:Object(r.jsxs)(g.a,Object(b.a)(Object(b.a)({},{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,arrows:!1}),{},{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"container h1-1",children:"Antecipe o seu FGTS e use seu dinheiro em poucas horas"}),Object(r.jsx)("div",{className:"cover"}),Object(r.jsx)("img",{src:"/public_html/images/hero-01.jpg",alt:"Slide",class:"image-1"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"container h1-2",children:"Portabilidade: reduza sua parcela com taxas a partir de 1,15% a.m"}),Object(r.jsx)("div",{className:"cover"}),Object(r.jsx)("img",{src:"/public_html/images/hero-02.jpg",alt:"Slide",class:"image-2"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"container h1-3",children:"Empr\xe9stimos consignados com as melhores taxas do mercado"}),Object(r.jsx)("div",{className:"cover"}),Object(r.jsx)("img",{src:"/public_html/images/hero-03.jpg",alt:"Slide",class:"image-3"})]})]}))})}}]),t}(a.Component);var f=function(){return Object(r.jsxs)("section",{className:"hero-container",id:"hero",children:[Object(r.jsx)(v,{}),Object(r.jsxs)("div",{className:"btn-container container",children:[Object(r.jsx)(d,{sectionId:"emprestimo",buttonSize:"btn--large",children:"Empr\xe9stimo consignado"}),Object(r.jsx)(d,{sectionId:"fgts",buttonSize:"btn--large",children:"Saque FGTS"})]})]})},N=(t(60),["align--left","align--center","align--right"]),S=function(e){var s=e.title,t=e.subTitle,a=e.alignment,c=N.includes(a)?a:N[0];return Object(r.jsxs)("div",{className:"title-container ".concat(c),children:[Object(r.jsx)("span",{children:t}),Object(r.jsx)("h2",{children:s})]})};t(61);var k=function(){return Object(r.jsx)("section",{className:"padding--default",id:"quem-somos",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(S,{title:"Cr\xe9dito f\xe1cil e r\xe1pido \xe9 com a CredEstados",subTitle:"QUEM SOMOS",alignment:"align--center"}),Object(r.jsx)("img",{src:"/public_html/images/logo-completa.png",alt:"Logo"}),Object(r.jsxs)("div",{className:"text-button",children:[Object(r.jsxs)("p",{children:["A Cred Estados \xe9 uma ",Object(r.jsx)("strong",{children:"empresa s\xf3lida"})," que se destaca no mercado financeiro por oferecer ",Object(r.jsx)("strong",{children:"excelentes servi\xe7os e produtos de cr\xe9dito consignado e pessoal"}),", representando os principais bancos e institui\xe7\xf5es financeiras."]}),Object(r.jsxs)("p",{children:["Nosso objetivo \xe9 oferecer para nossos clientes as ",Object(r.jsx)("strong",{children:"melhores solu\xe7\xf5es em cr\xe9dito."})]}),Object(r.jsxs)("p",{children:["Estamos sempre em busca de novas tecnologias, ",Object(r.jsx)("strong",{children:"condi\xe7\xf5es diferenciadas"})," e o principal: um ",Object(r.jsx)("strong",{children:"atendimento de qualidade"})," para nossos clientes"]}),Object(r.jsxs)(d,{onClick:function(){return window.open("https://wa.me/554797527024","_blank")},children:[Object(r.jsx)("i",{className:"fab fa-whatsapp"})," Fale conosco"]})]})]})})},w=(t(62),function(e){var s=e.iconPath,t=e.title,a=e.text;return Object(r.jsxs)("div",{className:"icon-text",children:[Object(r.jsx)("img",{src:"/public_html"+s,alt:t}),Object(r.jsx)("h3",{children:t}),Object(r.jsx)("p",{children:a})]})});t(63);var C=function(){return Object(r.jsx)("section",{className:"padding--default bg--light-grey",id:"diferenciais",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(S,{title:"Especialistas em servi\xe7os financeiros",subTitle:"DIFERENCIAIS",alignment:"align--left"}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)(w,{iconPath:"/images/icone-06.png",title:"Sem consulta ao Serasa",text:"N\xe3o consultamos o SPC/Serasa para liberar cr\xe9dito (exceto cr\xe9dito pessoal)."}),Object(r.jsx)(w,{iconPath:"/images/icone-02.png",title:"As melhores taxas",text:"Nosso objetivo \xe9 ajudar voc\xea a alcan\xe7ar os seus objetivos. Oferecemos sempre as melhores condi\xe7\xf5es."}),Object(r.jsx)(w,{iconPath:"/images/icone-03.png",title:"Atendimento diferenciado",text:"Nossa equipe de consultores est\xe1 preparada e \xe0 disposi\xe7\xe3o para te atender da melhor forma."}),Object(r.jsx)(w,{iconPath:"/images/icone-01.png",title:"Dinheiro f\xe1cil e r\xe1pido",text:"Com a CredEstados voc\xea recebe seu cr\xe9dito em at\xe9 24h sem nem sair de casa."})]}),Object(r.jsxs)(d,{onClick:function(){return window.open("https://wa.me/554797527024","_blank")},children:[Object(r.jsx)("i",{className:"fab fa-whatsapp"})," Fale conosco"]})]})})},y=(t(64),function(e){var s=e.imgPath,t=e.text;return Object(r.jsx)("a",{target:"_blank",href:"https://wa.me/554797527024",children:Object(r.jsxs)("div",{className:"card-emprestimo shadow-2",children:[Object(r.jsx)("div",{className:"cover"}),Object(r.jsx)("div",{className:"hover"}),Object(r.jsx)("img",{src:"/public_html"+s,alt:t}),Object(r.jsx)("h3",{children:t})]})})});t(65);var T=function(){return Object(r.jsx)("section",{className:"padding--default",id:"emprestimo",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(S,{title:"As melhores condi\xe7\xf5es de cr\xe9dito para voc\xea",subTitle:"EMPR\xc9STIMO CONSIGNADO",alignment:"align--left"}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)(y,{imgPath:"/images/emprestimo-01.jpg",text:"APOSENTADOS INSS"}),Object(r.jsx)(y,{imgPath:"/images/emprestimo-02.jpg",text:"PENSIONISTAS INSS"}),Object(r.jsx)(y,{imgPath:"/images/emprestimo-03.jpg",text:"SERVIDORES P\xdaBLICOS"}),Object(r.jsx)(y,{imgPath:"/images/emprestimo-04.jpg",text:"FOR\xc7AS ARMADAS"}),Object(r.jsx)(y,{imgPath:"/images/emprestimo-05.jpg",text:"CART\xc3O DE CR\xc9DITO CONSIGNADO"}),Object(r.jsx)(y,{imgPath:"/images/emprestimo-06.jpg",text:"PORTABILIDADE DE CR\xc9DITO"})]}),Object(r.jsx)("img",{src:"/public_html/images/pattern-02.png",alt:"padrao",className:"padrao padrao3"}),Object(r.jsxs)(d,{onClick:function(){return window.open("https://wa.me/554797527024","_blank")},children:[" ",Object(r.jsx)("i",{className:"fab fa-whatsapp"})," Simular agora"]})]})})},E=t(26);t(66);var I=function(){var e=Object(a.useState)(""),s=Object(n.a)(e,2),t=s[0],c=s[1],i=Object(a.useState)(""),o=Object(n.a)(i,2),l=o[0],j=o[1];return Object(r.jsxs)("section",{className:"padding--default bg--light-grey",id:"fgts",children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(S,{title:"Veja quanto voc\xea pode retirar do seu fundo de garantia",subTitle:"FGTS",alignment:"align--left"}),Object(r.jsx)("div",{className:"text",children:Object(r.jsxs)("p",{children:["Antecipe as parcelas anuais do seu Saque-Anivers\xe1rio.",Object(r.jsx)("br",{}),"Informe seu saldo e o seu anivers\xe1rio e conhe\xe7a as condi\xe7\xf5es."]})}),Object(r.jsxs)("form",{id:"fgts-form",className:"card-simulacao-fgts shadow-2",children:[Object(r.jsxs)("div",{className:"card-header",children:[Object(r.jsx)("i",{class:"fas fa-piggy-bank"}),Object(r.jsx)("h3",{children:"Saque FGTS"})]}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsxs)("div",{className:"body-row valor",children:[Object(r.jsx)("span",{children:"Saldo FGTS"}),Object(r.jsx)(E.a,{required:!0,thousandSeparator:".",decimalSeparator:",",decimalScale:"2",prefix:"R$ ",id:"saldo-fgts",type:"text",placeholder:"R$ 0",onChange:function(e){return c(e.target.value)}})]}),Object(r.jsxs)("div",{className:"body-row aniversario",children:[Object(r.jsx)("span",{children:"Seu anivers\xe1rio"}),Object(r.jsx)("input",{required:!0,onChange:function(e){return j(e.target.value)},type:"date"})]})]}),Object(r.jsx)(d,{onClick:function(){var e=document.getElementById("fgts-form"),s=encodeURIComponent("Ol\xe1, gostaria de uma simula\xe7\xe3o para antecipa\xe7\xe3o do FGTS!\n      \nMeu saldo \xe9 de ".concat(t," e meu anivers\xe1rio \xe9 no dia ").concat(l,"."));e.checkValidity()?window.open("https://wa.me/554797527024?text=".concat(s),"_blank"):e.reportValidity()},buttonStyle:"btn--primary",children:"Simular"})]})]}),Object(r.jsx)("img",{src:"/public_html/images/pattern-01.png",alt:"padrao",className:"padrao padrao4"})]})},_=function(e){Object(O.a)(t,e);var s=Object(x.a)(t);function t(){return Object(h.a)(this,t),s.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"slider-parceiros",children:Object(r.jsxs)(g.a,Object(b.a)(Object(b.a)({},{dots:!1,infinite:!0,speed:250,slidesToShow:4,slidesToScroll:1,autoplay:!0,arrows:!1,responsive:[{breakpoint:875,settings:{slidesToShow:3}},{breakpoint:575,settings:{slidesToShow:2}}]}),{},{children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"/public_html/images/parceiro-01.png",alt:"Parceiro"})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"/public_html/images/parceiro-02.png",alt:"Parceiro"})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"/public_html/images/parceiro-03.png",alt:"Parceiro"})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"/public_html/images/parceiro-04.png",alt:"Parceiro"})})]}))})}}]),t}(a.Component);t(67);var P=function(){return Object(r.jsx)("section",{className:"padding--default",id:"parceiros",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(S,{title:"Trabalhamos com as principais institui\xe7\xf5es financeiras do pa\xeds",subTitle:"PARCEIROS",alignment:"align--center"}),Object(r.jsx)(_,{})]})})};t(68);var A=function(){return Object(r.jsxs)("footer",{className:"bg--light-grey",children:[Object(r.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.537323684257!2d-48.64222938440911!3d-26.981547502578376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cb8aa79ba3c9%3A0x581d0da1d710c19f!2sCred%20Estados%20Empr%C3%A9stimos%20Consignados!5e0!3m2!1spt-BR!2sbr!4v1637241714308!5m2!1spt-BR!2sbr",width:"100%",height:"450",style:{border:0},allowfullscreen:"",loading:"lazy"}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"logo-social",children:[Object(r.jsx)("img",{src:"/public_html/images/logo-completa.png",alt:"Logo"}),Object(r.jsxs)("div",{className:"social-icons",children:[Object(r.jsx)("a",{target:"_blank",href:"https://wa.me/554797527024",children:Object(r.jsx)("i",{class:"fab fa-whatsapp"})}),Object(r.jsx)("a",{target:"_blank",href:"https://www.facebook.com/credestados",children:Object(r.jsx)("i",{class:"fab fa-facebook-f"})}),Object(r.jsx)("a",{target:"_blank",href:"https://www.instagram.com/credestados/",children:Object(r.jsx)("i",{class:"fab fa-instagram"})})]})]}),Object(r.jsxs)("div",{className:"column navigation",children:[Object(r.jsx)("h3",{children:"Navegar"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.Link,{to:"quem-somos",activeClass:"active",spy:!0,smooth:!0,children:"Quem somos"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.Link,{to:"diferenciais",activeClass:"active",spy:!0,smooth:!0,children:"Diferenciais"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.Link,{to:"emprestimo",activeClass:"active",spy:!0,smooth:!0,children:"Empr\xe9stimo"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.Link,{to:"fgts",activeClass:"active",spy:!0,smooth:!0,children:"FGTS"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.Link,{to:"parceiros",activeClass:"active",spy:!0,smooth:!0,children:"Parceiros"})})]})]}),Object(r.jsxs)("div",{className:"column icons",children:[Object(r.jsx)("h3",{children:"Entre em contato"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsxs)("a",{target:"_blank",href:"mailto:contato@credestados.com.br",children:[Object(r.jsx)("i",{class:"fas fa-envelope"}),Object(r.jsx)("span",{children:"contato@credestados.com.br"})]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("a",{target:"_blank",href:"tel:(47) 3268-4843",children:[Object(r.jsx)("i",{class:"fas fa-phone-alt"}),Object(r.jsx)("span",{children:"(47) 3268-4843"})]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("a",{target:"_blank",href:"https://www.google.com/maps?ll=-26.981552,-48.640041&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6349246038411362719",children:[Object(r.jsx)("i",{class:"fas fa-map-marker-alt"}),Object(r.jsxs)("span",{children:["Av. do Estado Dalmo Vieira, 2985",Object(r.jsx)("br",{}),"Centro, Balne\xe1rio Cambori\xfa - SC"]})]})})]})]})]})]})},L=(t(69),function(e){var s=e.title,t=e.text,a=e.buttonText;e.targetSectionId;return Object(r.jsxs)("div",{className:"card-hero shadow-2",children:[Object(r.jsx)("h3",{children:s}),Object(r.jsx)("p",{children:t}),Object(r.jsxs)(d,{onClick:function(){return window.open("https://wa.me/554797527024","_blank")},buttonSize:"btn--medium",children:[Object(r.jsx)("i",{class:"fab fa-whatsapp"})," ",a]})]})});var R=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(f,{}),Object(r.jsxs)("div",{className:"cards-container container",children:[Object(r.jsx)(L,{title:"Empr\xe9stimo consignado",text:"O empr\xe9stimo consignado \xe9 descontado diretamente no contracheque, holerite do servidor p\xfablico ou no benef\xedcio do INSS. Temos as melhores condi\xe7\xf5es do mercado, fa\xe7a j\xe1 sua simula\xe7\xe3o sem compromisso com um de nossos atendentes.",targetSectionId:"emprestimo",buttonText:"Simular agora"}),Object(r.jsx)(L,{title:"FGTS",text:"Chega de passar sufoco com o seu dinheiro parado, liberamos em poucas horas o seu valor aprisionado na conta do FGTS. Fale agora com um de nossos atendentes.",targetSectionId:"fgts",buttonText:"Simular agora"})]}),Object(r.jsx)(k,{}),Object(r.jsx)("img",{src:"/public_html/images/pattern-01.png",alt:"padrao",className:"padrao padrao1"}),Object(r.jsx)(C,{}),Object(r.jsx)("img",{src:"/public_html/images/pattern-02.png",alt:"padrao",className:"padrao padrao2"}),Object(r.jsx)(T,{}),Object(r.jsx)(I,{}),Object(r.jsx)(P,{}),Object(r.jsx)(A,{})]})};i.a.render(Object(r.jsx)(R,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.76500798.chunk.js.map
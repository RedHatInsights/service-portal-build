(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{613:function(e,t,a){"use strict";var r=a(19),n=Object(r.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},configureSourceTitle:{id:"platforms.list.configure-source",defaultMessage:"Configure a source in order to add products to portfolios."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"To connect to a source, go to <a>Sources</a> under Settings."},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"}});t.a=n},903:function(e,t,a){"use strict";a.r(t);var r=a(23),n=a.n(r),l=a(0),o=a.n(l),s=a(18),i=a(98),c=a(99),m=a(21),f=a(13),p=a(137),u=a(801),d=a.n(u),g=a(187),E=a(188),v=a(86),T=a(602),x=a(87),h=a(620),b=a(772),N=a(92),w=a(95),M=a(613),y=a(17),S=["service","platform"];t.default=function(){var e=Object(y.a)(),t=Object(v.a)(S),a=n()(t,1)[0],r=Object(l.useState)(!0),u=n()(r,2),O=u[0],j=u[1],k=Object(s.useDispatch)(),C=Object(s.useSelector)((function(e){return e.platformReducer.serviceOffering})),F=C.service,D=C.source;return Object(l.useEffect)((function(){j(!0),k(Object(T.e)(a.service,a.platform)).then((function(){return j(!1)})).catch((function(){return j(!1)}))}),[a.service,a.platform]),O?o.a.createElement(g.Section,{className:"global-primary-background full-height pf-u-p-lg"},o.a.createElement(x.h,null)):o.a.createElement(g.Section,{className:"global-primary-background full-height"},o.a.createElement(i.Grid,{hasGutter:!0,className:"pf-u-p-lg"},o.a.createElement("div",{className:"pf-u-mb-sm"},o.a.createElement(b.a,null)),o.a.createElement(c.GridItem,{sm:12,className:"pf-u-mb-md"},o.a.createElement(p.Level,null,o.a.createElement(N.a,{grow:!0,alignStart:!0,className:"pf-l-flex"},o.a.createElement(h.a,{src:D.icon_url,height:64}),o.a.createElement(m.TextContent,null,o.a.createElement(f.Text,{component:"h1"},F.name),o.a.createElement(f.Text,{component:"small"},e(M.a.offeringTitle)))))),o.a.createElement(c.GridItem,{md:3,lg:2},o.a.createElement(m.TextContent,null,o.a.createElement(f.Text,{className:"font-14"},e(w.a.platform)),o.a.createElement(f.Text,{id:"source",className:"overflow-wrap",component:f.TextVariants.p},D.name),o.a.createElement(f.Text,{className:"font-14"},e(w.a.created)),o.a.createElement(f.Text,{id:"created_at",className:"overflow-wrap",component:f.TextVariants.p},o.a.createElement(E.DateFormat,{type:"relative",date:F.created_at})))),o.a.createElement(c.GridItem,{md:9,lg:10},o.a.createElement(m.TextContent,null,o.a.createElement(f.Text,{className:"font-14"},e(w.a.name)),o.a.createElement(f.Text,{id:"description",component:f.TextVariants.p},F.name),o.a.createElement(f.Text,{className:"font-14"},e(w.a.description)),o.a.createElement(f.Text,{id:"long_description",component:f.TextVariants.p},F.description),o.a.createElement("hr",{className:"pf-c-divider"}),o.a.createElement(f.Text,{component:"h2"},e(M.a.offeringParameters)),o.a.createElement(d.a,{src:F.extra})))))}}}]);
//# sourceMappingURL=../sourcemaps/service-offering-detail~5a11b65b.js.map
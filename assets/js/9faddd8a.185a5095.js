"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74912],{39076:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"auto-docs/screens/OrganizationFunds/OrganizationFunds/functions/default","title":"default","description":"Admin Docs","source":"@site/docs/auto-docs/screens/OrganizationFunds/OrganizationFunds/functions/default.md","sourceDirName":"auto-docs/screens/OrganizationFunds/OrganizationFunds/functions","slug":"/auto-docs/screens/OrganizationFunds/OrganizationFunds/functions/default","permalink":"/docs/auto-docs/screens/OrganizationFunds/OrganizationFunds/functions/default","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-admin/edit/develop/docs/docs/auto-docs/screens/OrganizationFunds/OrganizationFunds/functions/default.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"InterfaceFundModal","permalink":"/docs/auto-docs/screens/OrganizationFunds/FundModal/interfaces/InterfaceFundModal"},"next":{"title":"MOCKS","permalink":"/docs/auto-docs/screens/OrganizationFunds/OrganizationFundsMocks/variables/MOCKS"}}');var d=s(74848),t=s(28453);const r={},o=void 0,l={},a=[{value:"GraphQL Queries",id:"graphql-queries",level:3},{value:"Props",id:"props",level:3},{value:"State",id:"state",level:3},{value:"Methods",id:"methods",level:3},{value:"Returns",id:"returns",level:2},{value:"CSS Strategy Explanation:",id:"css-strategy-explanation",level:2},{value:"Benefits:",id:"benefits",level:3},{value:"Global CSS Classes used:",id:"global-css-classes-used",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/",children:"Admin Docs"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h1,{id:"function-default",children:"Function: default()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"default"}),"(): ",(0,d.jsx)(n.code,{children:"Element"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-admin/blob/main/src/screens/OrganizationFunds/OrganizationFunds.tsx#L99",children:"src/screens/OrganizationFunds/OrganizationFunds.tsx:99"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"organizationFunds"})," component displays a list of funds for a specific organization,\nallowing users to search, sort, view and edit funds."]}),"\n",(0,d.jsxs)(n.p,{children:["This component utilizes the ",(0,d.jsx)(n.code,{children:"DataGrid"})," from Material-UI to present the list of funds in a tabular format,\nand includes functionality for filtering and sorting. It also handles the opening and closing of modals\nfor creating and editing."]}),"\n",(0,d.jsx)(n.p,{children:"It includes:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"A search input field to filter funds by name."}),"\n",(0,d.jsx)(n.li,{children:"A dropdown menu to sort funds by creation date."}),"\n",(0,d.jsx)(n.li,{children:"A button to create a new fund."}),"\n",(0,d.jsx)(n.li,{children:"A table to display the list of funds with columns for fund details and actions."}),"\n",(0,d.jsx)(n.li,{children:"Modals for creating and editing funds."}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"graphql-queries",children:"GraphQL Queries"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"FUND_LIST"}),": Fetches a list of funds for the given organization, filtered and sorted based on the provided parameters."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"props",children:"Props"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"orgId"}),": The ID of the organization whose funds are being managed."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"state",children:"State"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"fund"}),": The currently selected fund for editing or deletion."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"searchTerm"}),": The current search term used for filtering funds."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"sortBy"}),": The current sorting order for funds."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"modalState"}),": The state of the modals (edit/create)."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"fundModalMode"}),": The mode of the fund modal (edit or create)."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"handleOpenModal(fund: InterfaceFundInfo | null, mode: 'edit' | 'create')"}),": Opens the fund modal with the given fund and mode."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"handleClick(fundId: string)"}),": Navigates to the campaign page for the specified fund."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Element"})}),"\n",(0,d.jsx)(n.p,{children:"The rendered component."}),"\n",(0,d.jsx)(n.h2,{id:"css-strategy-explanation",children:"CSS Strategy Explanation:"}),"\n",(0,d.jsxs)(n.p,{children:["To ensure consistency across the application and reduce duplication, common styles\n(such as button styles) have been moved to the global CSS file. Instead of using\ncomponent-specific classes (e.g., ",(0,d.jsx)(n.code,{children:".greenregbtnOrganizationFundCampaign"}),", ",(0,d.jsx)(n.code,{children:".greenregbtnPledge"}),"), a single reusable\nclass (e.g., .addButton) is now applied."]}),"\n",(0,d.jsx)(n.h3,{id:"benefits",children:"Benefits:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"**Reduces redundant CSS code."}),"\n",(0,d.jsx)(n.li,{children:"**Improves maintainability by centralizing common styles."}),"\n",(0,d.jsx)(n.li,{children:"**Ensures consistent styling across components."}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"global-css-classes-used",children:"Global CSS Classes used:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:".tableHeader"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:".subtleBlueGrey"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:".head"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:".btnsContainer"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:".input"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:".inputField"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:".searchButton"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"For more details on the reusable classes, refer to the global CSS file."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(96540);const d={},t=i.createContext(d);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
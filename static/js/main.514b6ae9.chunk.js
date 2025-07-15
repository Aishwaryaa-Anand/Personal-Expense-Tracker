(this["webpackJsonpPersonal-Expense-Tracker"]=this["webpackJsonpPersonal-Expense-Tracker"]||[]).push([[0],{15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),d=n(7),c=n.n(d),s=(n(15),n(2)),r=n(1);const a=s.a.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  font-size: 16px;
  width: 100%;
`,l=s.a.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`,p=s.a.div`
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;
  & span {
    color: ${e=>e.isIncome?"green":"red"};
    font-weight: bold;
    font-size: 20px;
  }
`,x=s.a.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
  & span {
    color: #0d1d2c;
    opacity: 80%;
    font-weight: bold;
    font-size: 20px;
  }
`,b=s.a.div`
  font-size: 15px;
  background: #0d1d2c;
  display: flex;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  flex-direction: row;
  border-radius: 4px;
  font-weight: bold;
`,u=s.a.div`
  font-size: 15px;
  display: ${e=>e.isAddTxnVisible?"flex":"none"};
  color: #0d1d2c;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  width: 100%;
  align-items: center;
  padding: 15px 20px;
  margin: 10px 20px;
  gap: 10px;
  & input {
    width: 90%;
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`,j=s.a.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 10px 0;
  & input {
    width: unset;
    margin: 0 10px;
  }
`,h=e=>{const[t,n]=Object(i.useState)(),[o,d]=Object(i.useState)(),[c,s]=Object(i.useState)("EXPENSE");return Object(r.jsxs)(u,{isAddTxnVisible:e.isAddTxnVisible,children:[Object(r.jsx)("input",{placeholder:"Amount",type:"number",value:t,onChange:e=>n(e.target.value)}),Object(r.jsx)("input",{placeholder:"Description",value:o,onChange:e=>d(e.target.value)}),Object(r.jsxs)(j,{children:[Object(r.jsx)("input",{type:"radio",id:"expense",name:"type",value:"EXPENSE",checked:"EXPENSE"===c,onChange:e=>s(e.target.value)}),Object(r.jsx)("label",{htmlFor:"expense",children:"Expense"}),Object(r.jsx)("input",{type:"radio",id:"income",name:"type",value:"INCOME",checked:"INCOME"===c,onChange:e=>s(e.target.value)}),Object(r.jsx)("label",{htmlFor:"Expense",children:"Income"})]}),Object(r.jsx)(b,{onClick:()=>e.addTransaction({id:Date.now(),amount:Number(t),desc:o,type:c}),children:"Add Transaction"})]})};var g=e=>{const[t,n]=Object(i.useState)(!1);return Object(r.jsxs)(a,{children:[Object(r.jsxs)(x,{children:["Balance: $",e.income-e.expense,Object(r.jsx)(b,{onClick:()=>n(e=>!e),children:t?"CANCEL":"ADD"})]}),t&&Object(r.jsx)(h,{isAddTxnVisible:t,addTransaction:t=>{e.addTransaction(t),n(e=>!e)}}),Object(r.jsxs)(l,{children:[Object(r.jsxs)(p,{children:["Expense",Object(r.jsxs)("span",{children:["$",e.expense]})]}),Object(r.jsxs)(p,{isIncome:!0,children:["Income",Object(r.jsxs)("span",{children:["$",e.income]})]})]})]})};const f=s.a.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  overflow-y: auto !important;
  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
  }
`,m=s.a.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid #e6e8e9;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  border-right: 4px solid ${e=>e.isExpense?"red":"green"};
`,O=e=>{var t,n,i;return Object(r.jsxs)(m,{isExpense:"EXPENSE"===(null===(t=e.payload)||void 0===t?void 0:t.type),children:[Object(r.jsx)("span",{children:null===(n=e.payload)||void 0===n?void 0:n.desc}),Object(r.jsxs)("span",{children:["$",null===(i=e.payload)||void 0===i?void 0:i.amount]})]})};var v=e=>{const[t,n]=Object(i.useState)(""),[o,d]=Object(i.useState)(e.transactions),c=t=>{if(!t||!t.trim().length)return void d(e.transactions);let n=[...e.transactions];n=n.filter(e=>e.desc.toLowerCase().includes(t.toLowerCase().trim())),d(n)};return Object(i.useEffect)(()=>{c(t)},[e.transactions]),Object(r.jsxs)(f,{children:["Transactions",Object(r.jsx)("input",{placeholder:"Search",onChange:e=>{n(e.target.value),c(e.target.value)}}),null===o||void 0===o?void 0:o.map(e=>Object(r.jsx)(O,{payload:e}))]})};const w=s.a.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 360px;
  align-items: center;
  justify-content: space-between;
`;var y=e=>{const[t,n]=Object(i.useState)([]),[o,d]=Object(i.useState)(0),[c,s]=Object(i.useState)(0);Object(i.useEffect)(()=>(()=>{let e=0,n=0;t.map(t=>"EXPENSE"===t.type?e+=t.amount:n+=t.amount),d(e),s(n)})(),[t]);return Object(r.jsxs)(w,{children:[Object(r.jsx)(g,{expense:o,income:c,addTransaction:e=>{const i=[...t];i.push(e),n(i)}}),null!==t&&void 0!==t&&t.length?Object(r.jsx)(v,{transactions:t}):""]})};const E=s.a.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
`,k=s.a.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;var S=()=>Object(r.jsxs)(E,{children:[Object(r.jsx)(k,{children:"Expense Tracker"}),Object(r.jsx)(y,{})]});c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(S,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.514b6ae9.chunk.js.map
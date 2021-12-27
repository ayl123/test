import DashBoard from "../pages/dashBoard";
import List from "../pages/list";
import Main from "../Layout/Main"
const LeftMenu = [
  {
    title:"DashBoard",
    path: "/dashBoard",
    component: DashBoard,
  },
  {
    title:"用户列表",
    path: "/list",
    children: [
      {
        title:"列表1",
        path: "/list/list1",
        component:List,
      }
    ]
  }
]
export default LeftMenu;
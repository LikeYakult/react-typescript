import { CommonState } from "../constants/GlobalInterFace";

const initState = {
  isLogin: false,
  navRouter: [
    {name: "合约", to: "/"},
    {name: "指南", to: "/"},
    {name: "API", to: "/"},
    {name: "客服", to: "/"},
  ]
};

export default function(state: CommonState = initState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

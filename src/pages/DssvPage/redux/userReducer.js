const initialState = {
  users: [],
};
export const SET_USERS = "SET_USERS";
export let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS: {
      state.users = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

//  vào component list => xoá state hiện tại, đẩy res lên redux và data từ redux về render lại

// vào compoment form , sau khi xoá thành công thì gọi api lấy danh sách và đẩy res lên redux => component list sẽ render lại

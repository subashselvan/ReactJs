// this is HOC 
// this comp is just going to return the children of the props it gets
// This is like a wrapping component that does not render any actual HTML
// naming convention of hoc is to have 'With' prefix in filename 
const WithLastLogin = (props) => props.children

export default WithLastLogin;

let routerHookObject: any = null;

const routerHook = (router: any) => {
  if (router) {
    routerHookObject = router;
  }

  return routerHookObject;
};
export default routerHook;

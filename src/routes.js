import Main from './screens/main'
import Detail from './screens/detail'

const routes = [
  {
    name: "Main",
    path: '/',
    component: Main
  },
  {
    name: "Detail",
    path: '/detail/:id',
    component: Detail
  }
]

export default routes

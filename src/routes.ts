import { createBrowserRouter } from 'react-router'
import Academy from './pages/Academy'
import CourseDetail from './pages/CourseDetail'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Academy,
  },
  {
    path: '/treinamento/:slug',
    Component: CourseDetail,
  },
])

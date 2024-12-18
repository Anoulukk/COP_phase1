import {Route, Routes, Outlet, Navigate, useParams} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
// import {Vertical} from './components/Vertical'
import { Horizontal } from './components/Horizontal'
import { useAuth } from '../auth'

const WizardsPage = () => {
  const {currentUser}:any = useAuth()
  const { id } = useParams()
  console.log("🚀 ~ WizardsPage ~ id:", id)
console.log(currentUser);
  return (
  <Routes>
    <Route element={<Outlet />}>
    <Route
        path='/*'
        element={
          <>
            <PageTitle >ບົດວິພາກດ້ານສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ (ສວລ.5.1)</PageTitle>
            <Horizontal enterprise_group={currentUser?.enterprise} version_id={id} />
          </>
        }
      />
      {/* <Route index element={<Navigate to='/form' />} /> */}
    </Route>
  </Routes>
)

}
export default WizardsPage

import { Link } from 'react-router-dom'
import {KTIcon} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {UsersListFilter} from './UsersListFilter'

const UsersListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* begin::Add user */}
      <Link to="/dashboard/newForm" type='button' className='btn btn-primary' >
        <KTIcon iconName='plus' className='fs-2' />
        ເພີ່ມຟອມໃໝ່
      </Link>
      {/* end::Add user */}
    </div>
  )
}

export {UsersListToolbar}

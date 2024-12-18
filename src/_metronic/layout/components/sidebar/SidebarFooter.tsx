
import { Link } from 'react-router-dom'
import {KTIcon} from '../../../helpers'

const SidebarFooter = () => {
  return (
    <div className='app-sidebar-footer flex-column-auto p-8 ' id='kt_app_sidebar_footer'>
      <Link to='/dashboard' className=''>
        <KTIcon iconName='setting-2' className='btn-icon fs-2 mb-1' />
      </Link>
    </div>
  )
}

export {SidebarFooter}

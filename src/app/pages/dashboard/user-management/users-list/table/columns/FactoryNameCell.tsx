
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {User} from '../../core/_models'
import { Link } from 'react-router-dom'

type Props = {
  user: any
}

const FactoryNameCell: FC<Props> = ({user}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <Link to={`detail/${user.version_id}`}>
    <div className='d-flex flex-column'>
      <p className='text-gray-800 text-hover-primary mb-1'>
        {user.name}
      </p>
    </div>
</Link>
  </div>
)

export {FactoryNameCell}

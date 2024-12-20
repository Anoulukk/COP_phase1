
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {User} from '../../core/_models'

type Props = {
  user: any
}

const DateCell: FC<Props> = ({user}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}

    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {user.date}
      </a>
    </div>
  </div>
)

export {DateCell}

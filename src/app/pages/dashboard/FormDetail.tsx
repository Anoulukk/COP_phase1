import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import { UsersListWrapper } from './user-management/users-list/UsersList'
import { useParams } from 'react-router-dom'

const DetailPage: FC = () => {
  const { id } = useParams()

  return (
  <>
    <p>{id}</p>
  </>
)
}

const FormDetail: FC = () => {
  return (
    <>
            <PageTitle >ລາຍລະອຽດຂອງໄຟລ໌</PageTitle>
      <DetailPage />
    </>
  )
}

export {FormDetail}

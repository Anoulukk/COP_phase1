import {useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import axios from 'axios'

const SidebarMenuMain = () => {
  const intl = useIntl()
  const [versions, setVersions] = useState<any[]>([]) // State for versions

  useEffect(() => {
    const fetchVersions = async () => {
      try {
        // const response = await axios.get(`http://localhost:5173/myFiles.json`)
        setVersions([{id:"1", version_id: "1"}])
      } catch (error) {
        console.error('Error fetching versions:', error)
      } 
    }

    fetchVersions()
  }, [])


  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='home'
        title='ໄຟລ໌ທັງໝົດຂອງຂ້ອຍ'
        fontIcon='bi-app-indicator'
      />

      <SidebarMenuItemWithSub to='/form' title='ເອກະສານທັງໝົດທີ່ເຄີຍປ້ອນ' icon='file'>
        {versions.map((item: any) => (
          <SidebarMenuItem
            key={item.id} // Provide a unique key
            to={`/form/${item.version_id}`}
            title={`V ${item.version_id} ບົດວິພາກດ້ານສິ່ງແວດລ້ອມ (ສວລ.5.1)`}
          />
        ))}
      </SidebarMenuItemWithSub>
    </>
  )
}

export {SidebarMenuMain}

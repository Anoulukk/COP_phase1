
import {useEffect} from 'react'
import {Outlet, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'
    style={{
      backgroundImage: `url(${toAbsoluteUrl('media/misc/LoginPageBG.png')})`,
      backgroundSize: 'cover', // Ensures the image covers the entire area
      backgroundPosition: 'center', // Centers the image within the container
      backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      height: '100vh', // Full viewport height
      width: '100vw', // Full viewport width
    }}
    >
      {/* begin::Body */}
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1'>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
          {/* begin::Wrapper */}
          <div className='w-lg-500px p-10'>
            <Outlet />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}

        {/* end::Content */}
      </div>
      {/* end::Aside */}
    </div>
  )
}

export {AuthLayout}

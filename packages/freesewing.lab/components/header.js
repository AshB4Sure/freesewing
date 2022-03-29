import { useState, useEffect } from 'react'
import Logo from 'shared/components/logos/freesewing.js'
import Link from 'next/link'
import ThemePicker from 'shared/components/theme-picker.js'
import LocalePicker from 'shared/components/locale-picker.js'
import PatternPicker from 'site/components/pattern-picker.js'
import VersionPicker from 'site/components/version-picker.js'
import CloseIcon from 'shared/components/icons/close.js'
import MenuIcon from 'shared/components/icons/menu.js'

const Right = props => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
)
const Left = props => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>
)

const Header = ({ app }) => {

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const curScrollPos = (typeof window !== 'undefined') ? window.pageYOffset : 0
        if (curScrollPos >= prevScrollPos) {
          if (show && curScrollPos > 20) setShow(false)
        }
        else setShow(true)
        setPrevScrollPos(curScrollPos)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos, show])


  return (
      <header className={`
        fixed top-0 left-0
        bg-neutral
        w-full
        z-30
        transition-transform
        ${show ? '': 'fixed top-0 left-0 -translate-y-20'}
      `}>
        <div className="max-w-6xl m-auto">
          <div className="p-2 flex flex-row gap-2 justify-between text-neutral-content">
            <button
              className={`
                btn btn-sm
                text-neutral-content bg-transparent
                border border-transparent
                hover:bg-transparent hover:border-base-100
                sm:hidden
                h-12
              `}
              onClick={app.togglePrimaryMenu}>
                {app.primaryMenu
                  ? <><CloseIcon /><span className="opacity-50 pl-2 flex flex-row items-center gap-1"><Left />swipe</span></>
                  : <><MenuIcon /><span className="opacity-50 pl-2 flex flex-row items-center gap-1"><Right />swipe</span></>
                }
            </button>
            <div className="hidden sm:flex flex-row items-center">
              <PatternPicker app={app} />
              <VersionPicker app={app} />
            </div>
            <div className="hidden md:flex md:flex-row gap-2">
              <Link href="/">
                <a className="flex flex-column items-center">
                  <Logo size={36} fill="currentColor" stroke={false} />
                </a>
              </Link>
              <Link href="/">
                <a role="button" className="btn btn-link btn-sm text-neutral-content h-12">
                  lab.freesewing.dev
                </a>
              </Link>
            </div>
            <div className="hidden sm:flex flex-row items-center">
              <ThemePicker app={app} />
              <LocalePicker app={app} />
            </div>
          </div>
        </div>
        <div className={`theme-gradient h-1 w-full z-10 relative -mb-1 ${app.loading ? 'loading' : ''}`}></div>
      </header>
  )
}

export default Header

import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import LogoBlack from '@/data/resized_black_piece.svg'
import LogoWhite from '@/data/resized_white_piece.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useTheme } from 'next-themes'

const LayoutWrapper = ({ children }) => {
  const { theme, resolvedTheme } = useTheme()
  const currentTheme = theme || resolvedTheme
  const router = useRouter()

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  {currentTheme === 'dark' ? <LogoWhite /> : <LogoBlack />}
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`p-1 text-lg font-medium transition duration-300 ease-in-out sm:p-4 ${
                    router.pathname === link.href
                      ? 'text-primary-500 dark:text-primary-500'
                      : 'text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

import FooterTop from 'components/FooterTop/FooterTop'
import './Footer.scss'
import FooterBottom from 'components/FooterBottom/FooterBottom'
type Props = {}
const Footer = (props: Props) => {
    return (
        <footer className="footer">
            <FooterTop />
            <FooterBottom />
        </footer>
    )
}
export default Footer

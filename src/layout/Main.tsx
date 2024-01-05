import MainContent from 'components/MainContent/MainContent'
import MainSlider from 'components/MainSlider/MainSlider'

type Props = {}
const Main = (props: Props) => {
    return (
        <main>
            <MainSlider />
            <MainContent />
        </main>
    )
}
export default Main

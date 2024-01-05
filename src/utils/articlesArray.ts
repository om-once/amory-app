export type ArticleType = {
    id: number
    category: string[]
    title: string
    date: string
    author: string
    comments: number | string
    image: string
    imageSmall: string
    description: string[]
    readingTime: number
    isPopular: boolean
}

export const ArticlesArray: ArticleType[] = [
    {
        id: 1,
        category: ['LIFESTYLE'],
        title: 'HOW TO BECOME YOUR OWN BOSS',
        date: 'March 13, 2016',
        author: 'Amory',
        comments: 'no',
        image: '/images/manly1.jpg',
        imageSmall: '/images/manly1-small.jpg',
        description: [
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.',
            'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.',
        ],
        readingTime: 3,
        isPopular: true,
    },
    {
        id: 2,
        category: ['FRONT PAGE SLIDESHOW', 'LIFESTYLE'],
        title: 'A PERFECT SUIT FOR YOUR NEXT MEETING',
        date: 'May 23, 2014',
        author: 'Amory',
        comments: 6,
        image: '/images/manly2.jpg',
        imageSmall: '/images/manly2-small.jpg',
        description: [
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.',
            'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.',
        ],
        readingTime: 3,
        isPopular: true,
    },
    {
        id: 3,
        category: ["EDITOR'S CHOICE", 'LIFESTYLE'],
        title: 'THIS IS A GALLERY POST',
        date: 'April 19, 2013',
        author: 'Amory',
        comments: 'no',
        image: '/images/manly3.jpg',
        imageSmall: '/images/manly3-small.jpg',
        description: [
            'Lorem ipsum dolor sit amet, consecteter adipiscing elit , sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci. tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
            'Tation apeirian singulis ne vel, sed vocibus cotidieque an. Eu postulant efficiantur usu, at pro appetere qualisque euripidis. Duo sint tritani labores eu, ad zzril omittam vim, an mel harum. Melius labores. Civibus scriptorem has an. Nam no sint scaevola. Viris adipiscing vituperatoribus vix eu.',
            'Tation apeirian singulis ne vel, sed vocibus cotidieque an. Eu postulant efficiantur usu, at pro appetere qualisque euripidis. Duo sint tritani labores eu, ad zzril omittam vim, an mel harum. Melius labores. Civibus scriptorem has an. Nam no sint scaevola. Viris adipiscing vituperatoribus vix eu.',
        ],
        readingTime: 1,
        isPopular: true,
    },
    {
        id: 4,
        category: ['LIFESTYLE'],
        title: 'THIS IS A VIDEO POST',
        date: 'March 13, 2013',
        author: 'Amory',
        comments: 6,
        image: '',
        imageSmall: '',
        description: [
            'Lorem ipsum dolor sit amet, conseterer ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci. tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
            'Lorem ipsum dolor sit amet, consecteter ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci. tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        ],
        readingTime: 2,
        isPopular: false,
    },
]

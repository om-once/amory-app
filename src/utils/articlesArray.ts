export type Review = {
    reviewName: string
    reviewText: string
    reviewImage: string
    reviewDate: string
}

export type ArticleType = {
    id: number
    category: string[]
    title: string
    date: string
    author: string
    authorImage: string
    authorText: string
    image: string
    imageSmall: string
    description: string
    descriptionFull: string
    readingTime: number
    isPopular: boolean
    tags: string[]
    link: string
    reviews: Review[]
}

export const ArticlesArray: ArticleType[] = [
    {
        id: 1,
        category: ['lifestyle'],
        title: 'HOW TO BECOME YOUR OWN BOSS',
        date: 'March 13, 2016',
        author: 'Amory',
        authorImage: '/images/written.jpg',
        authorText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        image: '/images/manly1.jpg',
        imageSmall: '/images/manly1-small.jpg',
        description:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <strong>Nam liber tempor</strong> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.</p>',
        descriptionFull: `<div class="float-left">
            <img src="/images/manly1-float.jpg" alt="article" />
            <p>
              Investigationes demonstraverunt <strong>lectores legere</strong> me
              lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
              qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram,anteposuerit
              litterarum formas humanitatis per seacula quarta decima et quinta
              decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
          </div>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
          </p>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram,anteposuerit.
            Investigationes demonstraverunt lectores legere me lius quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <div class="quote">
            <img src="/images/quote-icon.png" alt="article" />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna Veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat.
            </blockquote>
          </div>
          <p>
            Duis autem vel eum iriure dolor in hendrerit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet
            iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </p>
          <h3 class="article-item-title">EXAMPLE OF A LIST</h3>
          <ul>
            <li>This is a list item number 1</li>
            <li>This is a list item number 2</li>
            <li>This is a list item number 3</li>
            <li>This is a list item number 4</li>
          </ul>
          <h3 class="article-item-title">CONCLUSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>`,
        readingTime: 3,
        isPopular: true,
        tags: ['boss', 'lifestyle'],
        link: '/articles/how-to-become-your-own-boss/',
        reviews: [],
    },
    {
        id: 2,
        category: ['front page slideshow', 'lifestyle'],
        title: 'A PERFECT SUIT FOR YOUR NEXT MEETING',
        date: 'May 23, 2014',
        author: 'Amory',
        authorImage: '/images/written.jpg',
        authorText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        image: '/images/manly2.jpg',
        imageSmall: '/images/manly2-small.jpg',
        description:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <strong>Nam liber tempor</strong> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.</p>',
        descriptionFull: `<div class="float-left">
            <img src="/images/manly2-float.jpg" alt="article" />
            <p>
              Investigationes demonstraverunt <strong>lectores legere</strong> me
              lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
              qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram,anteposuerit
              litterarum formas humanitatis per seacula quarta decima et quinta
              decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
          </div>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
          </p>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram,anteposuerit.
            Investigationes demonstraverunt lectores legere me lius quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <div class="quote">
            <img src="/images/quote-icon.png" alt="article" />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna Veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat.
            </blockquote>
          </div>
          <p>
            Duis autem vel eum iriure dolor in hendrerit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet
            iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </p>
          <h3 class="article-item-title">EXAMPLE OF A LIST</h3>
          <ul>
            <li>This is a list item number 1</li>
            <li>This is a list item number 2</li>
            <li>This is a list item number 3</li>
            <li>This is a list item number 4</li>
          </ul>
          <h3 class="article-item-title">CONCLUSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>`,
        readingTime: 3,
        isPopular: true,
        tags: ['decor', 'holidays', 'lifestyle'],
        link: '/articles/a-perfect-suit-for-your-next-mitting/',
        reviews: [
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'May 31, 2012 at 9:27 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'May 31, 2012 at 9:26 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'December 3, 2014 at 12:17 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'June 3, 2015 at 12:17 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'April 3, 2016 at 12:22 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'March 5, 2017 at 11:17 pm',
            },
        ],
    },
    {
        id: 3,
        category: ["editor's choise", 'lifestyle'],
        title: 'THIS IS A GALLERY POST',
        date: 'April 19, 2013',
        author: 'Amory',
        authorImage: '/images/written.jpg',
        authorText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        image: '/images/manly3.jpg',
        imageSmall: '/images/manly3-small.jpg',
        description:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <strong>Nam liber tempor</strong> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.</p>',
        descriptionFull: `<div class="float-left">
            <img src="/images/manly2-float.jpg" alt="article" />
            <p>
              Investigationes demonstraverunt <strong>lectores legere</strong> me
              lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
              qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram,anteposuerit
              litterarum formas humanitatis per seacula quarta decima et quinta
              decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
          </div>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
          </p>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram,anteposuerit.
            Investigationes demonstraverunt lectores legere me lius quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <div class="quote">
            <img src="/images/quote-icon.png" alt="article" />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna Veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat.
            </blockquote>
          </div>
          <p>
            Duis autem vel eum iriure dolor in hendrerit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet
            iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </p>
          <h3 class="article-item-title">EXAMPLE OF A LIST</h3>
          <ul>
            <li>This is a list item number 1</li>
            <li>This is a list item number 2</li>
            <li>This is a list item number 3</li>
            <li>This is a list item number 4</li>
          </ul>
          <h3 class="article-item-title">CONCLUSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>`,
        readingTime: 1,
        isPopular: true,
        tags: ['gallery', 'lifestyle'],
        link: '/articles/this-is-a-galery-post/',
        reviews: [],
    },
    {
        id: 4,
        category: ['lifestyle'],
        title: 'THIS IS A VIDEO POST',
        date: 'March 13, 2013',
        author: 'Amory',
        authorImage: '/images/written.jpg',
        authorText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        image: '',
        imageSmall: '',
        description:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <strong>Nam liber tempor</strong> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.</p>',
        descriptionFull: `<div class="float-left">
            <img src="/images/manly2-float.jpg" alt="article" />
            <p>
              Investigationes demonstraverunt <strong>lectores legere</strong> me
              lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
              qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram,anteposuerit
              litterarum formas humanitatis per seacula quarta decima et quinta
              decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
          </div>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
          </p>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram,anteposuerit.
            Investigationes demonstraverunt lectores legere me lius quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <div class="quote">
            <img src="/images/quote-icon.png" alt="article" />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna Veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat.
            </blockquote>
          </div>
          <p>
            Duis autem vel eum iriure dolor in hendrerit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet
            iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </p>
          <h3 class="article-item-title">EXAMPLE OF A LIST</h3>
          <ul>
            <li>This is a list item number 1</li>
            <li>This is a list item number 2</li>
            <li>This is a list item number 3</li>
            <li>This is a list item number 4</li>
          </ul>
          <h3 class="article-item-title">CONCLUSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>`,
        readingTime: 2,
        isPopular: false,
        tags: ['photography', 'video'],
        link: '/articles/this-is-a-video-post/',
        reviews: [],
    },
    {
        id: 5,
        category: ['front page slideshow', 'travel'],
        title: 'GET YOUR BEARD DONE PROPERLY',
        date: 'January 3, 2013',
        author: 'Amory',
        authorImage: '/images/written.jpg',
        authorText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        image: '/images/manly5.jpg',
        imageSmall: '',
        description:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <strong>Nam liber tempor</strong> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.</p>',
        descriptionFull: `<div class="float-left">
            <img src="/images/manly5-float.jpg" alt="article" />
            <p>
              Investigationes demonstraverunt <strong>lectores legere</strong> me
              lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
              qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram,anteposuerit
              litterarum formas humanitatis per seacula quarta decima et quinta
              decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
          </div>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
          </p>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram,anteposuerit.
            Investigationes demonstraverunt lectores legere me lius quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <div class="quote">
            <img src="/images/quote-icon.png" alt="article" />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna Veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat.
            </blockquote>
          </div>
          <p>
            Duis autem vel eum iriure dolor in hendrerit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet
            iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </p>
          <h3 class="article-item-title">EXAMPLE OF A LIST</h3>
          <ul>
            <li>This is a list item number 1</li>
            <li>This is a list item number 2</li>
            <li>This is a list item number 3</li>
            <li>This is a list item number 4</li>
          </ul>
          <h3 class="article-item-title">CONCLUSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>`,
        readingTime: 3,
        isPopular: false,
        tags: ['farm', 'travel'],
        link: '/articles/get-your-beard-done-properly/',
        reviews: [
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'May 31, 2012 at 9:27 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'May 31, 2012 at 9:26 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'December 3, 2014 at 12:17 pm',
            },
        ],
    },
    {
        id: 6,
        category: ["editor's choise", 'travel'],
        title: 'BEST BREAKFAST PLACE TO VISIT',
        date: 'January 2, 2013',
        author: 'Amory',
        authorImage: '/images/written.jpg',
        authorText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        image: '/images/manly6.jpg',
        imageSmall: '',
        description:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <strong>Nam liber tempor</strong> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.</p>',
        descriptionFull: `<div class="float-left">
            <img src="/images/manly6-float.jpg" alt="article" />
            <p>
              Investigationes demonstraverunt <strong>lectores legere</strong> me
              lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
              qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram,anteposuerit
              litterarum formas humanitatis per seacula quarta decima et quinta
              decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
          </div>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
          </p>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram,anteposuerit.
            Investigationes demonstraverunt lectores legere me lius quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <div class="quote">
            <img src="/images/quote-icon.png" alt="article" />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna Veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat.
            </blockquote>
          </div>
          <p>
            Duis autem vel eum iriure dolor in hendrerit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet
            iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </p>
          <h3 class="article-item-title">EXAMPLE OF A LIST</h3>
          <ul>
            <li>This is a list item number 1</li>
            <li>This is a list item number 2</li>
            <li>This is a list item number 3</li>
            <li>This is a list item number 4</li>
          </ul>
          <h3 class="article-item-title">CONCLUSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>`,
        readingTime: 3,
        isPopular: false,
        tags: ['travel'],
        link: '/articles/best-breakfast-place-to-visit/',
        reviews: [
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'May 31, 2012 at 9:27 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'May 31, 2012 at 9:26 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'December 3, 2014 at 12:17 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'June 3, 2015 at 12:17 pm',
            },
        ],
    },
    {
        id: 7,
        category: ['lifestyle'],
        title: 'PERFECT ACCESSORIES',
        date: 'December 4, 2012',
        author: 'Amory',
        authorImage: '/images/written.jpg',
        authorText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        image: '/images/manly7.jpg',
        imageSmall: '',
        description:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <strong>Nam liber tempor</strong> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.</p>',
        descriptionFull: `<div class="float-left">
            <img src="/images/manly7-float.jpg" alt="article" />
            <p>
              Investigationes demonstraverunt <strong>lectores legere</strong> me
              lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
              qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram,anteposuerit
              litterarum formas humanitatis per seacula quarta decima et quinta
              decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
          </div>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
          </p>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram,anteposuerit.
            Investigationes demonstraverunt lectores legere me lius quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <div class="quote">
            <img src="/images/quote-icon.png" alt="article" />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna Veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat.
            </blockquote>
          </div>
          <p>
            Duis autem vel eum iriure dolor in hendrerit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet
            iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </p>
          <h3 class="article-item-title">EXAMPLE OF A LIST</h3>
          <ul>
            <li>This is a list item number 1</li>
            <li>This is a list item number 2</li>
            <li>This is a list item number 3</li>
            <li>This is a list item number 4</li>
          </ul>
          <h3 class="article-item-title">CONCLUSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>`,
        readingTime: 3,
        isPopular: false,
        tags: ['accessories', 'shoes'],
        link: '/articles/perfect-accessories/',
        reviews: [],
    },
    {
        id: 8,
        category: ["editor's choise", 'front page slideshow', 'lifestyle'],
        title: 'CHECK OUT PERFECT BEARD STYLES',
        date: 'December 4, 2012',
        author: 'Amory',
        authorImage: '/images/written.jpg',
        authorText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        image: '/images/manly8.jpg',
        imageSmall: '',
        description:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <strong>Nam liber tempor</strong> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.</p>',
        descriptionFull: `<div class="float-left">
            <img src="/images/manly8-float.jpg" alt="article" />
            <p>
              Investigationes demonstraverunt <strong>lectores legere</strong> me
              lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
              qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram,anteposuerit
              litterarum formas humanitatis per seacula quarta decima et quinta
              decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
          </div>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
          </p>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram,anteposuerit.
            Investigationes demonstraverunt lectores legere me lius quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <div class="quote">
            <img src="/images/quote-icon.png" alt="article" />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna Veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat.
            </blockquote>
          </div>
          <p>
            Duis autem vel eum iriure dolor in hendrerit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet
            iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </p>
          <h3 class="article-item-title">EXAMPLE OF A LIST</h3>
          <ul>
            <li>This is a list item number 1</li>
            <li>This is a list item number 2</li>
            <li>This is a list item number 3</li>
            <li>This is a list item number 4</li>
          </ul>
          <h3 class="article-item-title">CONCLUSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>`,
        readingTime: 3,
        isPopular: false,
        tags: ['dinner', 'food', 'lifestyle'],
        link: '/articles/check-our-perfect-beard-styles/',
        reviews: [],
    },
    {
        id: 9,
        category: ["editor's choise", 'lifestyle'],
        title: 'LONG BIKE RIDE',
        date: 'March 5, 2012',
        author: 'Amory',
        authorImage: '/images/written.jpg',
        authorText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        image: '/images/manly9.jpg',
        imageSmall: '',
        description:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <strong>Nam liber tempor</strong> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.</p>',
        descriptionFull: `<div class="float-left">
            <img src="/images/manly9-float.jpg" alt="article" />
            <p>
              Investigationes demonstraverunt <strong>lectores legere</strong> me
              lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
              qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram,anteposuerit
              litterarum formas humanitatis per seacula quarta decima et quinta
              decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
          </div>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
          </p>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram,anteposuerit.
            Investigationes demonstraverunt lectores legere me lius quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <div class="quote">
            <img src="/images/quote-icon.png" alt="article" />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna Veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat.
            </blockquote>
          </div>
          <p>
            Duis autem vel eum iriure dolor in hendrerit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet
            iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </p>
          <h3 class="article-item-title">EXAMPLE OF A LIST</h3>
          <ul>
            <li>This is a list item number 1</li>
            <li>This is a list item number 2</li>
            <li>This is a list item number 3</li>
            <li>This is a list item number 4</li>
          </ul>
          <h3 class="article-item-title">CONCLUSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>`,
        readingTime: 3,
        isPopular: false,
        tags: ['bike', 'lifestyle', 'motorcycle'],
        link: '/articles/long-bike-ride/',
        reviews: [],
    },
    {
        id: 10,
        category: ["editor's choise", 'lifestyle'],
        title: 'PREPARE FOOD LIKE A CHEF',
        date: 'March 4, 2012',
        author: 'Amory',
        authorImage: '/images/written.jpg',
        authorText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        image: '/images/manly10.jpg',
        imageSmall: '',
        description:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <strong>Nam liber tempor</strong> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.</p>',
        descriptionFull: `<div class="float-left">
            <img src="/images/manly10-float.jpg" alt="article" />
            <p>
              Investigationes demonstraverunt <strong>lectores legere</strong> me
              lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
              qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram,anteposuerit
              litterarum formas humanitatis per seacula quarta decima et quinta
              decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
          </div>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
          </p>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram,anteposuerit.
            Investigationes demonstraverunt lectores legere me lius quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <div class="quote">
            <img src="/images/quote-icon.png" alt="article" />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna Veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat.
            </blockquote>
          </div>
          <p>
            Duis autem vel eum iriure dolor in hendrerit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet
            iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </p>
          <h3 class="article-item-title">EXAMPLE OF A LIST</h3>
          <ul>
            <li>This is a list item number 1</li>
            <li>This is a list item number 2</li>
            <li>This is a list item number 3</li>
            <li>This is a list item number 4</li>
          </ul>
          <h3 class="article-item-title">CONCLUSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>`,
        readingTime: 3,
        isPopular: false,
        tags: ['chef', 'food', 'lifestyle'],
        link: '/articles/prepare-food-like-a-chef/',
        reviews: [],
    },
    {
        id: 11,
        category: ['photography'],
        title: 'THIS IS AUDIO POST',
        date: 'February 3, 2011',
        author: 'Amory',
        authorImage: '/images/written.jpg',
        authorText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        image: '/images/manly11.jpg',
        imageSmall: '',
        description:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <strong>Nam liber tempor</strong> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.</p>',
        descriptionFull: `<div class="float-left">
            <img src="/images/manly10-float.jpg" alt="article" />
            <p>
              Investigationes demonstraverunt <strong>lectores legere</strong> me
              lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
              qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram,anteposuerit
              litterarum formas humanitatis per seacula quarta decima et quinta
              decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
          </div>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
          </p>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram,anteposuerit.
            Investigationes demonstraverunt lectores legere me lius quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <div class="quote">
            <img src="/images/quote-icon.png" alt="article" />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna Veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat.
            </blockquote>
          </div>
          <p>
            Duis autem vel eum iriure dolor in hendrerit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet
            iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </p>
          <h3 class="article-item-title">EXAMPLE OF A LIST</h3>
          <ul>
            <li>This is a list item number 1</li>
            <li>This is a list item number 2</li>
            <li>This is a list item number 3</li>
            <li>This is a list item number 4</li>
          </ul>
          <h3 class="article-item-title">CONCLUSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>`,
        readingTime: 3,
        isPopular: false,
        tags: ['audio', 'post'],
        link: '/articles/this-is-audio-post/',
        reviews: [],
    },
    {
        id: 12,
        category: ['travel'],
        title: 'OUT TRIP INTO THE WILD',
        date: 'June 6, 2010',
        author: 'Amory',
        authorImage: '/images/written.jpg',
        authorText:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        image: '/images/manly12.jpg',
        imageSmall: '',
        description:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. <strong>Nam liber tempor</strong> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit.</p>',
        descriptionFull: `<div class="float-left">
            <img src="/images/manly10-float.jpg" alt="article" />
            <p>
              Investigationes demonstraverunt <strong>lectores legere</strong> me
              lius quod ii legunt saepius. Claritas est etiam processus dynamicus,
              qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram,anteposuerit
              litterarum formas humanitatis per seacula quarta decima et quinta
              decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
          </div>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
          </p>
          <p>
            Investigationes demonstraverunt <strong>lectores legere</strong> me lius
            quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
            sequitur mutationem consuetudium lectorum. Mirum est notare quam littera
            gothica, quam nunc putamus parum claram,anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta. Mirum est notare quam
            littera gothica, quam nunc putamus parum claram,anteposuerit.
            Investigationes demonstraverunt lectores legere me lius quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <div class="quote">
            <img src="/images/quote-icon.png" alt="article" />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna Veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat.
            </blockquote>
          </div>
          <p>
            Duis autem vel eum iriure dolor in hendrerit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsanet
            iusto odio dignissim qui blandit praesent. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </p>
          <h3 class="article-item-title">EXAMPLE OF A LIST</h3>
          <ul>
            <li>This is a list item number 1</li>
            <li>This is a list item number 2</li>
            <li>This is a list item number 3</li>
            <li>This is a list item number 4</li>
          </ul>
          <h3 class="article-item-title">CONCLUSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsanet iusto odio dignissim
            qui blandit praesent. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>`,
        readingTime: 5,
        isPopular: false,
        tags: ['travel'],
        link: '/articles/out-trip-into-the-wild/',
        reviews: [
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'May 31, 2012 at 9:27 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'May 31, 2012 at 9:26 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'December 3, 2014 at 12:17 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'June 3, 2015 at 12:17 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'April 3, 2016 at 12:22 pm',
            },
            {
                reviewName: 'Amory',
                reviewText:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori.',
                reviewImage: '/images/written.jpg',
                reviewDate: 'March 5, 2017 at 11:17 pm',
            },
        ],
    },
]

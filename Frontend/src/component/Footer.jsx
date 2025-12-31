import React from 'react'

function Footer() {
  return (
    <div>
        
        <footer className="footer footer-horizontal footer-center text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a href='/about' className="link link-hover">About us</a>
    <a href='/Contact' className="link link-hover">Contact</a>
    <a href='/jobs' className="link link-hover">Jobs</a>
    <a href='/press' className="link link-hover">Press kit</a>
  </nav>
  <nav>
          <div className="grid grid-flow-col gap-4">
            {/* Twitter / X */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775
                1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127
                1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515
                2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29
                2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054
                2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626
                1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04
                2.179 1.397 4.768 2.212 7.548 2.212 9.142 0
                14.307-7.721 13.995-14.646.962-.695
                1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23
                0-3.897.266-4.356 2.62-4.385 8.816.029
                6.185.484 8.549 4.385 8.816 3.6.245
                11.626.246 15.23 0 3.897-.266
                4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615
                12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333
                1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192
                4.615v3.385z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" className="fill-current">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0
                2.757 2.243 5 5 5h10c2.757 0 5-2.243
                5-5V7c0-2.757-2.243-5-5-5H7zm10
                2c1.654 0 3 1.346 3 3v10c0
                1.654-1.346 3-3 3H7c-1.654
                0-3-1.346-3-3V7c0-1.654
                1.346-3 3-3h10zm-5
                3a5 5 0 100 10 5 5 0 000-10zm0
                2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1
                1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/>
              </svg>
            </a>
          </div>
        </nav>

  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Finolex College Ltd</p>
  </aside>
</footer>
</div>
  )
}

export default Footer
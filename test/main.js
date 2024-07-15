import './style.css'

document.querySelector('#navbar').innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img src="javascript.svg" alt="Your Icon" width="30" height="30" class="d-inline-block align-text-top">
      <a class="navbar-brand mx-2" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">F**k off</a>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>
`
document.querySelector('#main1').innerHTML = `
<div class="container-lg">
    <div class="row justify-content-center">
      <div class="col-md-5 text-center text-md-start mb-3">
        <h1>
          <div class="display-2">Black-Belt</div>
          <div class="display-5 text-muted">Your Coding Skills</div>
        </h1>
        <p class="lead my-4 text-muted">Lorem ipsum, dolor sit amet consectetur
          adipisicing elit.</p>
        <a href="#pricing" class="btn btn-secondary btn-lg m-1">Button1</a>
        <a href="#pricing" class="btn btn-secondary btn-lg m-1">Button2</a>
      </div>
      <div class="col-md-5 text-center">
        <img class="" src="javascript.svg" alt="ebook cover" class="img-fluid" style="width: 80%; height: auto;">
      </div>
    </div>
  </div>

`
document.querySelector('#main2').innerHTML = `
<div class="container mt-6">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
              dy=".3em">Thumbnail</text>
          </svg>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content.
              This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
              dy=".3em">Thumbnail</text>
          </svg>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content.
              This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
              dy=".3em">Thumbnail</text>
          </svg>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content.
              This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
              dy=".3em">Thumbnail</text>
          </svg>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content.
              This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
              dy=".3em">Thumbnail</text>
          </svg>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content.
              This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
              dy=".3em">Thumbnail</text>
          </svg>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content.
              This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
              dy=".3em">Thumbnail</text>
          </svg>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content.
              This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
              dy=".3em">Thumbnail</text>
          </svg>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content.
              This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
              dy=".3em">Thumbnail</text>
          </svg>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content.
              This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`
document.querySelector('#footer').innerHTML = `
<footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
  <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
          <span class="fs-5">Bootstrap</span>
        </a>
        <ul class="list-unstyled small">
          <li class="mb-2">Designed and built with all the love in the world by the <a href="/docs/5.3/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
          <li class="mb-2">Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
          <li class="mb-2">Currently v5.3.2.</li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5>Links</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/">Home</a></li>
          <li class="mb-2"><a href="/docs/5.3/">Docs</a></li>
          <li class="mb-2"><a href="/docs/5.3/examples/">Examples</a></li>
          <li class="mb-2"><a href="https://icons.getbootstrap.com/">Icons</a></li>
          <li class="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
          <li class="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
          <li class="mb-2"><a href="https://cottonbureau.com/people/bootstrap" target="_blank" rel="noopener">Swag Store</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Community</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues" target="_blank" rel="noopener">Issues</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions" target="_blank" rel="noopener">Discussions</a></li>
          <li class="mb-2"><a href="https://github.com/sponsors/twbs" target="_blank" rel="noopener">Corporate sponsors</a></li>
          <li class="mb-2"><a href="https://opencollective.com/bootstrap" target="_blank" rel="noopener">Open Collective</a></li>
          <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5" target="_blank" rel="noopener">Stack Overflow</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
`



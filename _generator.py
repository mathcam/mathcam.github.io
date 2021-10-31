from jinja2 import Environment, FileSystemLoader
from css_html_js_minify import process_single_css_file, html_minify

from testimonials import testimonials

env = Environment(loader=FileSystemLoader('_templates'))

available = True
GPAGE = "https://g.page/mathcam"
SPM = "https://www.superprof.ch/cours-maths-physique-distance-enseignant-independant-fondateur-mathcam-developpeur.html"
SPP = "https://www.superprof.ch/cours-distance-physique-enseignant-independant-fondateur-mathcam-developpeur.html"

def make_pg(page):
  template = env.get_template(f'pages/{page}.j2')
  html = template.render(testimonials=testimonials, GPAGE=GPAGE, SPM=SPM, SPP=SPP, available=available)
  with open(page + '.html.tmp', 'w') as file:
    file.write(html)
  with open(page + '.html', 'w') as file:
    file.write(html_minify(html))

make_pg('index')
make_pg('en')
make_pg('fr-ch')
make_pg('en-ch')
make_pg('fr-fr')

template = env.get_template('pages/attestations.j2')
with open('attestations-fr.html', 'w') as file:
  html = html_minify(template.render(GPAGE=GPAGE, available=available, lang='fr'))
  file.write(html)
with open('attestations-en.html', 'w') as file:
  html = html_minify(template.render(GPAGE=GPAGE, available=available, lang='en'))
  file.write(html)

template = env.get_template('pages/booking.j2')
with open('reserver.html', 'w') as file:
  html = html_minify(template.render(GPAGE=GPAGE, available=available, lang='fr'))
  file.write(html)
with open('book.html', 'w') as file:
  html = html_minify(template.render(GPAGE=GPAGE, available=available, lang='en'))
  file.write(html)

template = env.get_template('pages/gift.j2')
with open('cadeau.html', 'w') as file:
  html = html_minify(template.render(available=available, testimonials=testimonials, GPAGE=GPAGE, SPM=SPM, SPP=SPP, lang='fr'))
  file.write(html)

# process_single_js_file('js/front.js', overwrite=False) # NOT WORKING CORRECTLY
process_single_css_file('css/style.css', overwrite=False)

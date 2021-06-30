from jinja2 import Environment, FileSystemLoader

from testimonials import testimonials

env = Environment(loader=FileSystemLoader('_templates'))

available = True
GPAGE = "https://g.page/mathcam"
SPM = "https://www.superprof.ch/cours-maths-physique-distance-enseignant-independant-fondateur-mathcam-developpeur.html"
SPP = "https://www.superprof.ch/cours-distance-physique-enseignant-independant-fondateur-mathcam-developpeur.html"

def make_pg(page):
  template = env.get_template(f'pages/{page}.j2')
  with open(page + '.html', 'w') as file:
    html = template.render(testimonials=testimonials, GPAGE=GPAGE, SPM=SPM, SPP=SPP, available=available)
    file.write(html)

make_pg('index')
make_pg('en')
make_pg('fr-ch')
make_pg('en-ch')

template = env.get_template(f'pages/attestations.j2')
with open('attestations-fr.html', 'w') as file:
  html = template.render(GPAGE=GPAGE, available=available, lang='fr')
  file.write(html)
with open('attestations-en.html', 'w') as file:
  html = template.render(GPAGE=GPAGE, available=available, lang='en')
  file.write(html)

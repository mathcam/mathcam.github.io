from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('_templates'))

def make_pg(page):
  template = env.get_template(f'pages/{page}.j2')
  with open(page + '.html', 'w') as file:
    html = template.render()
    file.write(html)

make_pg('index')
make_pg('fr-ch')
make_pg('attestations')



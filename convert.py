import os
import markdown

# Path to the template and articles
template_path = 'biochar-article.html'
articles_dir = 'austin_articles/'

# Read the template file
with open(template_path, 'r') as f:
    template_content = f.read()

# Find all markdown files in the articles directory
markdown_files = [f for f in os.listdir(articles_dir) if f.endswith('.md')]

for md_filename in markdown_files:
    # Construct full paths
    md_filepath = os.path.join(articles_dir, md_filename)
    html_filename = md_filename.replace('.md', '.html')
    html_filepath = os.path.join(articles_dir, html_filename)

    # Read the markdown content
    with open(md_filepath, 'r') as f:
        md_content = f.read()

    # Convert markdown to HTML
    # The first line of the markdown is the title, so we extract it
    lines = md_content.strip().split('\n')
    title = lines[0].replace('# ', '').strip()
    # The rest is the body
    body_md = '\n'.join(lines[1:])
    # Replace markdown h3 with html h3
    body_md = body_md.replace('### ', '<h3>')
    body_html = markdown.markdown(body_md)
    body_html = body_html.replace('<p><h3>', '<h3>')


    # Replace the title in the template
    new_template = template_content.replace('<title>Biochar: The Black Gold for Your Garden and the Planet - Minnow News</title>', f'<title>{title} - Minnow News</title>')

    # Replace the article content in the template
    # Find the start and end of the article tag
    start_tag = '<article>'
    end_tag = '</article>'
    start_index = new_template.find(start_tag)
    end_index = new_template.find(end_tag)

    if start_index != -1 and end_index != -1:
        # Reconstruct the article tag with the new content
        new_article_content = f'<article>\n<h2>{title}</h2>\n{body_html}\n</article>'
        final_html = new_template[:start_index] + new_article_content + new_template[end_index + len(end_tag):]

        # Write the new HTML file
        with open(html_filepath, 'w') as f:
            f.write(final_html)
        print(f"Created {html_filepath}")

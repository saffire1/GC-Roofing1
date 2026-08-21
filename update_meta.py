import re

with open('index.html', 'r') as f:
    content = f.read()

meta_tags = """
    <title>GC Roofing | Premium Roofing Services in Belfast</title>
    <meta name="description" content="Expert roof repairs, replacements, and professional roofing services across Belfast. Trusted local specialists with 15+ years of experience." />

    <!-- Open Graph / Social Media Sharing -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="GC Roofing | Premium Roofing Services in Belfast" />
    <meta property="og:description" content="Expert roof repairs, replacements, and professional roofing services across Belfast. Trusted local specialists with 15+ years of experience." />
    <meta property="og:image" content="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Bt2t1hRSNSqqSEhfXwrc_eorMgKOGPXbP24zs6NRzDJMPJ6AimEL7AbuwsmzMBS_lY501O9A4knF7Wmh5wHQ05gobQrjafL8B-8ycSNy5ca2dkdQW3qGqgTjp6TVGjUxAfHnnJxjlM3rj5Q0Rx0D7ef14szW5snFqW0NEAD5Ne7cLBytrpFE1St8uosz/s980/1000074370.jpg" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="GC Roofing | Premium Roofing Services in Belfast" />
    <meta name="twitter:description" content="Expert roof repairs, replacements, and professional roofing services across Belfast. Trusted local specialists with 15+ years of experience." />
    <meta name="twitter:image" content="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Bt2t1hRSNSqqSEhfXwrc_eorMgKOGPXbP24zs6NRzDJMPJ6AimEL7AbuwsmzMBS_lY501O9A4knF7Wmh5wHQ05gobQrjafL8B-8ycSNy5ca2dkdQW3qGqgTjp6TVGjUxAfHnnJxjlM3rj5Q0Rx0D7ef14szW5snFqW0NEAD5Ne7cLBytrpFE1St8uosz/s980/1000074370.jpg" />
"""

# Replace existing title and description
content = re.sub(r'<title>.*?</title>', '', content, flags=re.DOTALL)
content = re.sub(r'<meta name="description".*?>', '', content, flags=re.DOTALL)

# Insert the new tags before </head>
content = content.replace('</head>', f'{meta_tags}\n  </head>')

with open('index.html', 'w') as f:
    f.write(content)

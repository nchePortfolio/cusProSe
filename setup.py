import setuptools as st

packages = ['iterhmmbuild', 'iterhmmbuild.lib', 'prosecda', 'prosecda.lib', 'lib', 'scripts']

st.setup(name='cusProSe',
         python_requires='>=3',
         packages=packages,
         install_requires=[
             'lxml>=4.5.2',
             'matplotlib>=3.3.2',
             'PyYAML>=5.3.1',
             'networkx>=2.5',
             'numpy>=1.19.2'],
         entry_points={
             'console_scripts': [
                 'run_prosecda=prosecda.main:main',
                 'create_rules=prosecda.gui.create_rules:main',
                 'run_iterhmmbuild=iterhmmbuild.main:main',
                 'create_hmmdb=scripts.concat2hmmdb:main']
         }
         )

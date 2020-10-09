import setuptools as st

packages=['iterhmmbuild', 'iterhmmbuild.lib', 'prosecda', 'prosecda.lib']

st.setup(name='CustomProteinSearch',
         python_requires='>=3',
         version='0.0',
         packages=packages,
         install_requires=[
        'lxml>=4.5.2',
        'matplotlib>=3.3.2',
         'PyYAML>=5.3.1',
         'networkx>=2.5'],
         entry_points={
             'console_scripts': [
                 'run_prosecda=prosecda.main:main',
                 'run_iterhmmbuild=iterhmmbuild.main:main']
                      }
        )

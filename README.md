# Wikipedia Chemical Structure Explorer

[![DOI](https://www.zenodo.org/badge/27636133.svg)](https://www.zenodo.org/badge/latestdoi/27636133)

This application as been [published here](https://doi.org/10.1186/s13321-015-0061-y).

<https://wikipedia.cheminfo.org>

## Install locally

There are two ways for having the website on a local server.

### Zip archive

You can download the latest version directly on [GitHub](https://github.com/cheminfo/wikipedia/archive/main.zip).

### Easy updates with git

If you plan on updating regularly, you can use git :

```bash
git clone https://github.com/cheminfo/wikipedia.git
```

Then to update :

```bash
cd wikipedia
git pull
```

### Build and serve the website

To build the site, Node.js v20 is needed.

```bash
npm ci
npm run build
```

This generates the website in the `dist` directory.
It is a simple static site that can be served from any web server.

## Data synchronization with Wikipedia

The `dump` directory contains the scripts used to synchronize the data files using the Wikipedia API. They are NOT needed for the website to work and can be ignored by most people.

```bash
npm ci
cd dump
./dump.sh
```

## License

This project is released under The BSD License.

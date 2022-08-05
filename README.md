[![DOI](https://www.zenodo.org/badge/27636133.svg)](https://www.zenodo.org/badge/latestdoi/27636133)

# Wikipedia chemical structure explorer

This application as been [published here](https://doi.org/10.1186/s13321-015-0061-y).

[https://www.cheminfo.org/wikipedia](http://www.cheminfo.org/wikipedia)


## Install locally

There are two ways for having the website on a local server.

### Zip archive

You can download the latest version directly on [GitHub](https://github.com/cheminfo/wikipedia/archive/master.zip).

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

## Serve the website

All the required files for the website are located in the `site` directory. Just make this directory public on your server and it should work.  

## About `dump` and `node` directories

These directories contain Node.js maintenance scripts. They are NOT needed for the website to work and can be ignored.

## License

This project is released under The BSD License.

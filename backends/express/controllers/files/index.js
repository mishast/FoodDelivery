import fs from 'fs';
import path from 'path';
import uuidv4 from 'uuid/v4';
import formidable from 'formidable';
import sanitize from 'sanitize-filename';
import config from '../../config';
import errorHandler from '../../utils/errorHandler';

const getSafeFilePath = req => {
	const { id } = req.params;
	const safeId = id.replace(/[^a-zA-Z0-9-]/g, '');

	if (!safeId) {
		return '';
	}

	if (id !== safeId) {
		return '';
	}

	const { filename } = req.params;
	const safeFilename = sanitize(filename);

	if (!safeFilename) {
		return '';
	}

	if (filename !== safeFilename) {
		return '';
	}

	const filePath = path.join(config.uploadDir, `${safeId}-${safeFilename}`);

	return filePath;
};

const postFile = async (req, res) => {
	try {
		const form = new formidable.IncomingForm();

		form.parse(req);

		form.on('fileBegin', function(name, file) {
			const id = uuidv4();
			const filename = file.name;
			const filePath = getSafeFilePath(id, filename);

			if (!filePath) {
				throw new Error('Invalid filename');
			}

			file.path = filePath;

			const response = {
				fileId: id,
				filename,
				url: `${config.baseUrl}/files/${id}${filename}`
			};

			res.status(200).json(response);
		});

		form.on('file', function(name, file) {
			console.log(`Uploaded ${file.name}`);
		});
	} catch (err) {
		errorHandler(err, req, res);
	}
};

const getFile = async (req, res) => {
	const filePath = getSafeFilePath(req);

	if (!filePath) {
		res.status(404).send({ msg: 'not found' });
		return;
	}

	if (fs.existsSync(filePath)) {
		res.sendFile(filePath);
	} else {
		res.status(404).send({ msg: 'not found' });
	}
};

const deleteFile = async (req, res) => {
	const filePath = getSafeFilePath(req);

	if (!filePath) {
		res.status(404).send({ msg: 'not found' });
		return;
	}

	if (fs.existsSync(filePath)) {
		fs.unlinkSync(filePath);
	}
};

export default {
	postFile,
	getFile,
	deleteFile
};

const menuDefinition = [
	{
		name: 'File',
		children: [
			{
				name: 'New',
				target: 'file/new.new'
			},
			{
				divider: true
			},
			{
				name: 'Open',
				children: [
					{
						name: 'Open File',
						shortcut: 'O',
						ellipsis: true,
						target: 'file/open.open_file'
					},
					{
						name: 'Open Directory',
						ellipsis: true,
						target: 'file/open.open_dir'
					},
					{
						name: 'Open from Webcam',
						target: 'file/open.open_webcam'
					},
					{
						name: 'Open URL',
						ellipsis: true,
						target: 'file/open.open_url'
					},
					{
						name: 'Open Data URL',
						ellipsis: true,
						target: 'file/open.open_data_url'
					},
					{
						name: 'Open Test Template',
						target: 'file/open.open_template_test'
					}
				]
			},
			{
				name: 'Search Images',
				ellipsis: true,
				target: 'file/open.search'
			},
			{
				divider: true
			},
			{
				name: 'Export',
				ellipsis: true,
				shortcut: 'S',
				target: 'file/save.export'
			},
			{
				name: 'Save As',
				ellipsis: true,
				shortcut: 'Shift + S',
				target: 'file/save.save'
			},
			{
				name: 'Save As Data URL',
				ellipsis: true,
				target: 'file/save.save_data_url'
			},
			{
				name: 'Print',
				ellipsis: true,
				shortcut: 'Ctrl+P',
				target: 'file/print.print'
			},
			{
				divider: true
			},
			{
				name: 'Quick Save',
				shortcut: 'F9',
				target: 'file/quicksave.quicksave'
			},
			{
				name: 'Quick Load',
				shortcut: 'F10',
				target: 'file/quickload.quickload'
			}
		]
	},
	{
		name: 'Edit',
		children: [
			{
				name: 'Undo',
				shortcut: 'Ctrl+Z',
				target: 'edit/undo.undo'
			},
			{
				name: 'Redo',
				shortcut: 'Ctrl+Y',
				target: 'edit/redo.redo'
			},
			{
				divider: true
			},
			{
				name: 'Delete Selection',
				shortcut: 'Del',
				target: 'edit/selection.delete'
			},
			{
				name: 'Copy Selection',
				target: 'layer/new.new_selection'
			},
			{
				name: 'Copy to Clipboard',
				shortcut: 'Ctrl+C',
				target: 'edit/copy.copy_to_clipboard'
			},
			{
				name: 'Paste',
				shortcut: 'Ctrl+V',
				target: 'edit/paste.paste'
			},
			{
				divider: true
			},
			{
				name: 'Select All',
				shortcut: 'Ctrl+A',
				target: 'edit/selection.select_all'
			}
		]
	},
	{
		name: 'View',
		children: [
			{
				name: 'Zoom',
				children: [
					{
						name: 'Zoom In',
						target: 'view/zoom.in'
					},
					{
						name: 'Zoom Out',
						target: 'view/zoom.out'
					},
					{
						divider: true
					},
					{
						name: 'Original Size',
						target: 'view/zoom.original'
					},
					{
						name: 'Fit Window',
						target: 'view/zoom.auto'
					}
				]
			},
			{
				name: 'Grid',
				shortcut: 'G',
				target: 'view/grid.grid'
			},
			{
				name: 'Guides',
				children: [
					{
						name: 'Insert',
						ellipsis: true,
						target: 'view/guides.insert'
					},
					{
						name: 'Update',
						target: 'view/guides.update'
					},
					{
						name: 'Remove all',
						target: 'view/guides.remove'
					}
				]
			},
			{
				name: 'Ruler',
				target: 'view/ruler.ruler'
			},
			{
				divider: true
			},
			{
				name: 'Full Screen',
				target: 'view/full_screen.fs'
			}
		]
	},
	{
		name: 'Image',
		children: [
			{
				name: 'Information',
				shortcut: 'I',
				ellipsis: true,
				target: 'image/information.information'
			},
			{
				name: 'Canvas Size',
				ellipsis: true,
				target: 'image/size.size'
			},
			{
				name: 'Trim',
				ellipsis: true,
				shortcut: 'T',
				target: 'image/trim.trim'
			},
			{
				divider: true
			},
			{
				name: 'Resize',
				ellipsis: true,
				shortcut: 'R',
				target: 'image/resize.resize'
			},
			{
				name: 'Rotate',
				ellipsis: true,
				target: 'image/rotate.rotate'
			},
			{
				name: 'Flip',
				children: [
					{
						name: 'Vertical',
						target: 'image/flip.vertical'
					},
					{
						name: 'Horizontal',
						target: 'image/flip.horizontal'
					}
				]
			},
			{
				name: 'Translate',
				ellipsis: true,
				target: 'image/translate.translate'
			},
			{
				name: 'Opacity',
				ellipsis: true,
				target: 'image/opacity.opacity'
			},
			{
				divider: true
			},
			{
				name: 'Color Corrections',
				ellipsis: true,
				target: 'image/color_corrections.color_corrections'
			},
			{
				name: 'Auto Adjust Colors',
				shortcut: 'F',
				target: 'image/auto_adjust.auto_adjust'
			},
			{
				name: 'Decrease Color Depth',
				target: 'image/decrease_colors.decrease_colors'
			},
			{
				name: 'Color Palette',
				ellipsis: true,
				target: 'image/palette.palette'
			},
			{
				divider: true
			},
			{
				name: 'Histogram',
				ellipsis: true,
				target: 'image/histogram.histogram'
			}
		]
	},
	{
		name: 'Layer',
		children: [
			{
				name: 'New',
				shortcut: 'N',
				target: 'layer/new.new'
			},
			{
				name: 'New from Selection',
				target: 'layer/new.new_selection'
			},
			{
				divider: true
			},
			{
				name: 'Duplicate',
				shortcut: 'D',
				target: 'layer/duplicate.duplicate'
			},
			{
				name: 'Show / Hide',
				target: 'layer/visibility.toggle'
			},
			{
				name: 'Delete',
				target: 'layer/delete.delete'
			},
			{
				name: 'Convert to Raster',
				target: 'layer/raster.raster'
			},
			{
				divider: true
			},
			{
				name: 'Move',
				children: [
					{
						name: 'Up',
						target: 'layer/move.up'
					},
					{
						name: 'Down',
						target: 'layer/move.down'
					}
				]
			},
			{
				name: 'Composition',
				ellipsis: true,
				target: 'layer/composition.composition'
			},
			{
				name: 'Rename',
				ellipsis: true,
				target: 'layer/rename.rename'
			},
			{
				name: 'Clear',
				target: 'layer/clear.clear'
			},
			{
				divider: true
			},
			{
				name: 'Differences Down',
				target: 'layer/differences.differences'
			},
			{
				name: 'Merge Down',
				target: 'layer/merge.merge'
			},
			{
				name: 'Flatten Image',
				target: 'layer/flatten.flatten'
			}
		]
	},
];


export default menuDefinition;
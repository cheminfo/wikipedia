define(['forms/form'], function( Form ) {
	

	function makeOptions( cfg, form ) {

		var type = form.groups.general[ 0 ].type[ 0 ];

		switch( type ) {

			case 'checkbox':
				cfg.options = makeCheckboxOptions( form );
			break;

			case 'combo':
				cfg.options = makeComboOptions( form );
			break;

			case 'slider':
				cfg.min = parseFloat( form.groups.slider[ 0 ].start[ 0 ] || 0 );
				cfg.max = parseFloat( form.groups.slider[ 0 ].end[ 0 ] || 1 );
				cfg.step = parseFloat( form.groups.slider[ 0 ].step[ 0 ] || 0.1 );
			break;


			case 'slider_range':
				cfg.min = parseFloat( form.groups.range[ 0 ].start[ 0 ] || 0 );
				cfg.max = parseFloat( form.groups.range[ 0 ].end[ 0 ] || 1 );
				cfg.step = parseFloat( form.groups.range[ 0 ].step[ 0 ] || 0.1 );
				cfg.default = [ 
					Math.max(parseFloat(form.groups.range[ 0 ].val1[ 0 ]),cfg.min),
					Math.min(parseFloat(form.groups.range[ 0 ].val2[ 0 ]),cfg.max)
				];
				cfg.range = true;				
			break;
		}
	};

	function makeComboOptions( form ) {
		form = form.groups.options[ 0 ];
		var i = 0,
			l = form.length,
			cfg = [];
		for( ; i < l ; i ++ ) {
			cfg.push({ 
				title: form[ i ].label, 
				key: form[ i ].value
			});

		}
		return cfg;
	};

	function makeCheckboxOptions( form ) {
		form = form.groups.options[ 0 ];
		var i = 0,
			l = form.length,
			cfg = [];

		for( ; i < l ; cfg[ form[ i ].value ] = form[ i ].label, i ++ );

		return cfg;
	};


	return {

		makeConfig: function( jpath, operator ) {

			var el = {

				options: {
					multiple: true,
					title: "Form field"
				},

				groups: {
					general: {
						options: {
							type: 'list'
						},

						fields: {

							name: {
								type: 'text',
								title: 'Field name'
							},

							label: {
								type: 'text',
								title: 'Field label'
							},
							
							allow_undefined: {
								type: 'checkbox',
								title: 'Allow undefined',
								options: {allow:''}
							},
						
							type: {
								type: 'combo',
								title: 'Field type',
								options: [
									{ title: 'Text', key: 'text' },	
									{ title: 'Number', key: 'float' },
									{ title: 'Combo', key: 'combo' },
									{ title: 'Slider', key: 'slider' },
									{ title: 'Range', key: 'slider_range' },
									{ title: 'Checkbox', key: 'checkbox' }
								],

								displaySource:  {
									'text': 'text',
									'float': 'float',
									'combo': 'combo',
									'checkbox': 'checkbox',
									'slider': 'slider',
									'slider_range': 'slider_range'
								}
							}
						}
					},

					defaultVal: {

						options: {
							type: 'list',
							displayTarget: [ 'text', 'slider', 'combo', 'checkbox' ]
						},

						fields: {

							defaultVal: {
								type: 'text',
								title: 'Default value'
							}
						}
					},

					text: {

						options: {
							type: 'list',
							displayTarget: [ 'text' ]
						},

						fields: {


							case_sensitive: {
								type: 'checkbox',
								title: 'Case sensitive',
								options: {'case_sensitive': ''}
							}
						}
					},


					slider: {

						options: {
							type: 'list',
							displayTarget: [ 'slider' ]
						},

						fields: {


							start: {
								type: 'float',
								title: 'Start'
							},

							end: {
								type: 'float',
								title: 'End'
							},

							step: {
								type: 'float',
								title: 'Step'
							}
						}
					},


					range: {

						options: {
							type: 'list',
							displayTarget: [ 'slider_range' ]
						},

						fields: {

							start: {
								type: 'float',
								title: 'Start'
							},

							end: {
								type: 'float',
								title: 'End'
							},

							step: {
								type: 'float',
								title: 'Step'
							},

							val1: {
								type: 'float',
								title: 'Default min'
							},

							val2: {
								type: 'float',
								title: 'Default max'
							}

						}
					},

					options: {
						options: {
							type: 'table',
							multiple: true,
							displayTarget: [ 'combo', 'checkbox' ]
						},

						fields: {

							label: {
								type: 'text',
								title: 'Label'
							},

							value: {
								type: 'text',
								title: 'Value'
							}
						}
					}
				},

				sections: {

					validation: {
						options: {
							multiple: false,
							title: "Field validation"
						},

						groups: {

							general: {
								options: {
									type: 'list'
								},

								fields: {

									pattern: {
										type: 'text',
										title: 'Pattern'
									},

									neg: {
										type: 'text',
										title: 'Negative feedback'
									},

									pos: {
										type: 'text',
										title: 'Positive feedback'
									},

									authorize_empty: {
										type: 'checkbox',
										title: 'Authorize empty',
										options: { 'authorize': '' }
									}
								}
							}
						}
					}
				}
			}

			if( jpath ) {

				el.groups.general.fields.searchOnField = {
					type: 'combo',
					multiple: true,
					title: jpath.name,
					options: jpath.jpaths
				};
			}

			if( operator ) {

				el.groups.general.fields.operator = {
					type: 'combo',
					multiple: true,
					title: operator.name,
					options: [
						{ title: '=', key: '=' },
						{ title: '!=', key: '!=' },
						{ title: '>', key: '>' },
						{ title: '<', key: '<' },
						{ title: 'between', key: 'btw' },
						{ title: 'starts with', key: 'starts' },
						{ title: 'end with', key: 'end' },
						{ title: 'contains', key: 'contains' },
						{ title: 'does not contain', key: 'notcontain' }
					]
				}
			}

			return el;
			// makeConfig()
		},

		makeStructure: function( fields, callback ) {

			var i = 0,
				l = fields.length,
				allFields = {},
				type;
				
			for( ; i < l ; i ++ ) {

				if( ! fields[ i ].groups.general ) {
					continue;
				}
				
				var defaultVal = (fields[ i ].groups.defaultVal && fields[ i ].groups.defaultVal[ 0 ].defaultVal[0]) ? fields[ i ].groups.defaultVal[ 0 ].defaultVal[ 0 ] : ''
				var validation = {};

				if( fields[ i ].sections.validation && fields[ i ].sections.validation[ 0 ].groups && fields[ i ].sections.validation[ 0 ].groups.general[ 0 ].pattern[ 0 ] !== "" ) {
					validation.rules = [
											{
												pattern: fields[ i ].sections.validation[ 0 ].groups.general[ 0 ].pattern[ 0 ],
												orEmpty: fields[ i ].sections.validation[ 0 ].groups.general[ 0 ].authorize_empty[ 0 ][ 0 ] == 'authorize',
												feedback: {
													_class: true,
													message: fields[ i ].sections.validation[ 0 ].groups.general[ 0 ].neg
												}
											}
										];

					validation.positiveFeedback = {
						message: fields[ i ].sections.validation[ 0 ].groups.general[ 0 ].pos
					};
				}

				//console.log( validation );

				type = fields[ i ].groups.general[ 0 ].type[ 0 ];

				switch( type ) {

					case 'slider_range':
						type = 'slider';
					break;
				}

				allFields[ fields[ i ].groups.general[ 0 ].name[ 0 ] ] = {
					type: 	type,
					title: 	fields[ i ].groups.general[ 0 ].label[ 0 ],
					default: defaultVal,
					validation: validation
				};

				if( callback ) {
					callback( fields[ i ], allFields[ fields[ i ].groups.general[ 0 ].name[ 0 ] ] );
				}

				makeOptions( allFields[ fields[ i ].groups.general[ 0 ].name[ 0 ] ], fields[ i ] );
			}
			
			return allFields;
		},

		makeForm: function() {
			return new Form( );
		}
	}
});

/*
Code generated with Faust version 2.5.15
Compilation options: wast-i, -double -ftz 0
*/

function getJSONmydsp() {
	return "{\"name\":\"cubic_distortion\",\"version\":\"2.5.15\",\"options\":\"wast-i, -double -ftz 0\",\"size\":\"6880\",\"inputs\":\"0\",\"outputs\":\"2\",\"meta\":[{\"effect.lib/author\":\"Julius O. Smith (jos at ccrma.stanford.edu)\"},{\"effect.lib/copyright\":\"Julius O. Smith III\"},{\"effect.lib/exciter_author\":\"Priyanka Shekar (pshekar@ccrma.stanford.edu)\"},{\"effect.lib/exciter_copyright\":\"Copyright (c) 2013 Priyanka Shekar\"},{\"effect.lib/exciter_license\":\"MIT License (MIT)\"},{\"effect.lib/exciter_name\":\"Harmonic Exciter\"},{\"effect.lib/exciter_version\":\"1.0\"},{\"effect.lib/license\":\"STK-4.3\"},{\"effect.lib/name\":\"Faust Audio Effect Library\"},{\"effect.lib/version\":\"1.33\"},{\"filter.lib/author\":\"Julius O. Smith (jos at ccrma.stanford.edu)\"},{\"filter.lib/copyright\":\"Julius O. Smith III\"},{\"filter.lib/license\":\"STK-4.3\"},{\"filter.lib/name\":\"Faust Filter Library\"},{\"filter.lib/reference\":\"https://ccrma.stanford.edu/~jos/filters/\"},{\"filter.lib/version\":\"1.29\"},{\"math.lib/author\":\"GRAME\"},{\"math.lib/copyright\":\"GRAME\"},{\"math.lib/deprecated\":\"This library is deprecated and is not maintained anymore. It will be removed in August 2017.\"},{\"math.lib/license\":\"LGPL with exception\"},{\"math.lib/name\":\"Math Library\"},{\"math.lib/version\":\"1.0\"},{\"music.lib/author\":\"GRAME\"},{\"music.lib/copyright\":\"GRAME\"},{\"music.lib/license\":\"LGPL with exception\"},{\"music.lib/name\":\"Music Library\"},{\"music.lib/version\":\"1.0\"},{\"name\":\"cubic_distortion\"},{\"oscillator.lib/author\":\"Julius O. Smith (jos at ccrma.stanford.edu)\"},{\"oscillator.lib/copyright\":\"Julius O. Smith III\"},{\"oscillator.lib/license\":\"STK-4.3\"},{\"oscillator.lib/name\":\"Faust Oscillator Library\"},{\"oscillator.lib/version\":\"1.11\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"cubic_distortion\",\"items\":[{\"type\":\"vgroup\",\"label\":\"0x00\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"SINE WAVE OSCILLATOR oscrs\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"Sine oscillator based on 2D vector rotation\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Amplitude\",\"address\":\"/cubic_distortion/0x00/SINE_WAVE_OSCILLATOR_oscrs/Amplitude\",\"index\":\"1024\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Sawtooth waveform amplitude\"},{\"unit\":\"dB\"}],\"init\":\"-20\",\"min\":\"-120\",\"max\":\"10\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/cubic_distortion/0x00/SINE_WAVE_OSCILLATOR_oscrs/Frequency\",\"index\":\"1072\",\"meta\":[{\"2\":\"\"},{\"tooltip\":\"Sine wave frequency as a Piano Key (PK) number (A440 = 49 PK)\"},{\"unit\":\"PK\"}],\"init\":\"49\",\"min\":\"1\",\"max\":\"88\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Portamento\",\"address\":\"/cubic_distortion/0x00/SINE_WAVE_OSCILLATOR_oscrs/Portamento\",\"index\":\"1056\",\"meta\":[{\"3\":\"\"},{\"scale\":\"log\"},{\"tooltip\":\"Portamento (frequency-glide) time-constant in seconds\"},{\"unit\":\"sec\"}],\"init\":\"0.1\",\"min\":\"0.001\",\"max\":\"10\",\"step\":\"0.001\"}]}]},{\"type\":\"vgroup\",\"label\":\"0x00\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vgroup\",\"label\":\"CUBIC NONLINEARITY cubicnl\",\"meta\":[{\"tooltip\":\"Reference:          https://ccrma.stanford.edu/~jos/pasp/Cubic_Soft_Clipper.html\"}],\"items\":[{\"type\":\"checkbox\",\"label\":\"Bypass\",\"address\":\"/cubic_distortion/0x00/CUBIC_NONLINEARITY_cubicnl/Bypass\",\"index\":\"1000\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"When this is checked, the nonlinearity has no effect\"}]},{\"type\":\"hslider\",\"label\":\"Drive\",\"address\":\"/cubic_distortion/0x00/CUBIC_NONLINEARITY_cubicnl/Drive\",\"index\":\"1128\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Amount of distortion\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Offset\",\"address\":\"/cubic_distortion/0x00/CUBIC_NONLINEARITY_cubicnl/Offset\",\"index\":\"1152\",\"meta\":[{\"2\":\"\"},{\"tooltip\":\"Brings in even harmonics\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]},{\"type\":\"vgroup\",\"label\":\"0x00\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"CONSTANT-Q SPECTRUM ANALYZER (6E), 15 bands spanning LP, 9 octaves below 16000 Hz, HP\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"See Faust's filter.lib for documentation and references\"}],\"items\":[{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae7117a0\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae7117a0\",\"index\":\"4472\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae7001e0\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae7001e0\",\"index\":\"4248\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae6da560\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae6da560\",\"index\":\"3776\",\"meta\":[{\"2\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae6b8860\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae6b8860\",\"index\":\"3304\",\"meta\":[{\"3\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae696d80\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae696d80\",\"index\":\"2832\",\"meta\":[{\"4\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae7c63d0\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae7c63d0\",\"index\":\"6872\",\"meta\":[{\"5\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae7b4240\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae7b4240\",\"index\":\"6632\",\"meta\":[{\"6\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae7a20b0\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae7a20b0\",\"index\":\"6392\",\"meta\":[{\"7\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae78ff20\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae78ff20\",\"index\":\"6152\",\"meta\":[{\"8\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae77dd90\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae77dd90\",\"index\":\"5912\",\"meta\":[{\"9\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae76bc00\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae76bc00\",\"index\":\"5672\",\"meta\":[{\"10\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae759a70\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae759a70\",\"index\":\"5432\",\"meta\":[{\"11\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae7478e0\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae7478e0\",\"index\":\"5192\",\"meta\":[{\"12\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae735750\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae735750\",\"index\":\"4952\",\"meta\":[{\"13\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"},{\"type\":\"vbargraph\",\"label\":\"0x7ff3ae7235c0\",\"address\":\"/cubic_distortion/0x00/CONSTANT-Q_SPECTRUM_ANALYZER_(6E),_15_bands_spanning_LP,_9_octaves_below_16000_Hz,_HP/0x7ff3ae7235c0\",\"index\":\"4712\",\"meta\":[{\"14\":\"\"},{\"tooltip\":\"Spectral Band Level in dB\"},{\"unit\":\"dB\"}],\"min\":\"-50\",\"max\":\"10\"}]},{\"type\":\"hgroup\",\"label\":\"SPECTRUM ANALYZER CONTROLS\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"hslider\",\"label\":\"Level Averaging Time\",\"address\":\"/cubic_distortion/0x00/SPECTRUM_ANALYZER_CONTROLS/Level_Averaging_Time\",\"index\":\"2800\",\"meta\":[{\"0\":\"\"},{\"scale\":\"log\"},{\"tooltip\":\"band-level averaging time in milliseconds\"},{\"unit\":\"ms\"}],\"init\":\"100\",\"min\":\"1\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Level dB Offset\",\"address\":\"/cubic_distortion/0x00/SPECTRUM_ANALYZER_CONTROLS/Level_dB_Offset\",\"index\":\"0\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Level offset in decibels\"},{\"unit\":\"dB\"}],\"init\":\"50\",\"min\":\"0\",\"max\":\"100\",\"step\":\"1\"}]}]}]}]}";
}